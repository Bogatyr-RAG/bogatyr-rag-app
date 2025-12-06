import { defineStore } from "pinia";
import { ref } from "vue";
import type { Question } from "./types/question";

const QUESTION_STORE_NAME = 'question-store'

export const useQuestionStore = defineStore(QUESTION_STORE_NAME, () => {
    const questions = ref<Question[]>([])

    const question: Question = {
        id: 2,
        question: "Какие основные статьи расходов увеличились в этом месяце и какие меры по оптимизации можно предложить?"
    }

    function getQuestionById(id: number): Question | undefined {
        // return questions.value.find((question) => {
        //     return question.id === id
        // })
        return question
    }

    function saveAllQuestions(newQuestions: Question[]): void {
        questions.value = newQuestions
    }

    function addQuestion(newQuestion: Question): void {
        questions.value.push(newQuestion)
    }

    function updateQuestion(updatedQuestion: Question): void {
        questions.value = questions.value.map((question) => {
            return question.id === updatedQuestion.id ? updatedQuestion : question
        })
    }

    function deleteQuestion(id: number): void {
        questions.value = questions.value.filter((question) => {
            return question.id !== id
        })
    }

    function clearQuestions(): void {
        questions.value = []
    }

    return {
        questions,
        question,
        getQuestionById,
        saveAllQuestions,
        addQuestion,
        updateQuestion,
        deleteQuestion,
        clearQuestions
    }
})