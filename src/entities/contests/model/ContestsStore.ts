import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Contest } from '@/entities/contests'

const CONTEST_STORE_NAME = 'contest-store'

export const useContestStore = defineStore(CONTEST_STORE_NAME, () => {
  const contests = ref<Contest[]>([])

  function getContestById(id: number): Contest | undefined {
    return contests.value.find((contest)=> {
      return contest.id === id
    })
  }

  function getContestByName(name: string): Contest | undefined {
    return contests.value.find((contest)=> {
      return contest.title === name
    })
  }

  function saveAllContests(newContest: Contest[]): void {
    contests.value = newContest
  }

  function updateContest(updatedContest: Contest): void {
    contests.value = contests.value.map((contest) => {
      return contest.id === updatedContest.id ? updatedContest : contest
    })
  }

  function clearContests(): void {
    contests.value = []
  }

  return {
    contests,
    getContestById,
    getContestByName,
    saveAllContests,
    updateContest,
    clearContests
  }
})