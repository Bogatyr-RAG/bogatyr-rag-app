import { UTCDate } from '@date-fns/utc'

import { formatDateUTC, parseDateUTC } from '@/shared/lib/date'

import { mapApiToAchievementCategory, isAchievementCategoryApiData, type AchievementCategory, type AchievementCategoryApiData } from '@/entities/achievements/categories/@x/contests'

import type { ContestApiData, ContestRequestBody } from '../../api'
import { ContestStatuses } from '../../model/ContestStatuses'
import type { ContestAttributes, Contest } from '../../model/types/contestType'

function getContestStatus(startDate: Date, endDate: Date): ContestStatuses {
  const currentDate = new UTCDate()

  if (startDate <= currentDate && currentDate <= endDate) {
    return ContestStatuses.active
  }

  if (endDate < currentDate) {
    return ContestStatuses.archive
  }

  return ContestStatuses.upcoming
}

export function mapApiToContest(contestApiData: ContestApiData, includedData: unknown[]): Contest {
  const includedCategories: AchievementCategoryApiData[] = includedData.filter(isAchievementCategoryApiData)

  const contestCategories: AchievementCategory[] = contestApiData.relationships.categories.data
    .map((category) => {

      const replaceCategory = includedCategories.find((includedCategory) => {
        return includedCategory.id === category.id
      })

      return replaceCategory || null
    })
    .filter((category) => {
      return !!category
    })
    .map((category)=>{
      return mapApiToAchievementCategory(category as AchievementCategoryApiData)
    })

  const startDate = parseDateUTC(contestApiData.attributes.start_at)
  const endDate = parseDateUTC(contestApiData.attributes.end_at)

  const contestStatus = getContestStatus(startDate, endDate)

  const contest: Contest = {
    id: Number(contestApiData.id),
    title: contestApiData.attributes.title,
    description: contestApiData.attributes.description,
    categories: contestCategories,
    startDate,
    endDate,
    status: contestStatus
  }

  return contest
}

export function mapContestToApiFullRequestBody(contest: ContestAttributes): ContestRequestBody {
  const mappedCategories = contest.categories.map((category) => {
    return Number(category.id)
  })

  return {
    data: {
      type: 'contests',
      attributes: {
        title: contest.title,
        description: contest.description,
        start_at: formatDateUTC(contest.startDate, 'yyyy-MM-dd HH:mm:ss'),
        end_at: formatDateUTC(contest.endDate, 'yyyy-MM-dd HH:mm:ss'),
        category_ids: mappedCategories
      }
    }
  }
}
