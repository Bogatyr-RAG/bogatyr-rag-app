import { defineStore } from "pinia";
import { ref } from "vue";
import type { Answer } from "./types/answerTypes";

const ANSWER_STORE_NAME = 'answer-store'

export const useAnswerStore = defineStore(ANSWER_STORE_NAME, () => {
    const answers = ref<Answer[]>([])
    const answer: Answer = {
        id: 123,
        answer: 'Какой-то очень крутой ответ',
        confirmationDocumentLink: "Какой-то очень крутой подтверждающий документ"
    }

    function getAnswerById(id: number): Answer | undefined {
        // return answers.value.find((answer) => {
        //     return answer.id === id
        // })

        return answer
    }

    function saveAllAnswers(newAnswers: Answer[]): void {
        answers.value = newAnswers
    }

    function addAnswer(newAnswer: Answer): void {
        answers.value.push(newAnswer)
    }

    function deleteAnswer(id: number): void {
        answers.value = answers.value.filter((answer) => {
            return answer.id !== id
        })
    }

    function clearAnswers(): void {
        answers.value = []
    }

    return {
        answers,
        answer,
        getAnswerById,
        saveAllAnswers,
        addAnswer,
        deleteAnswer,
        clearAnswers
    }
})