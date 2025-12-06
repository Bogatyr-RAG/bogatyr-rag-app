<template>
     <div class="chat-page__layout">
                <div class="chat-page__messages">
                    <div class="message-wrapper message-wrapper--request">
                        <RequestMessage>
                            {{  answer.answer  }}
                        </RequestMessage>
                    </div>
                    <div class="message-wrapper message-wrapper--response">
                        <ResponceMessage>
                            Вам подойдет одна из следующих подписей:
                            - ...
                        </ResponceMessage>
                    </div>
                </div>
                <div class="chat-page__input">
                    <InputWithButton v-model="question.question" ref="send-question" @send="sendRequest"/>
                </div>
            </div>
</template>
<script setup lang="ts">
import { InputWithButton, RequestMessage, ResponceMessage } from 'src/shared/ui'
import { toRefs, useTemplateRef } from 'vue';
import { useAnswerStore } from 'src/entities/answer/model/AnswerStore';
import { useQuestionStore } from 'src/entities/question/model/QuestionStore';

const questionStore = useQuestionStore()
const answerStore = useAnswerStore()

const { question } = toRefs(questionStore)
const { answer } = toRefs(answerStore)

const send = useTemplateRef('send-question')

const sendRequest = () : void => {
    console.log('Запрос отправляется')
}   
</script>
<style scoped lang="scss">
.chat-page {
    &__layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 77vh;
        position: relative;
        overflow-x: hidden;
    }

    &__messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__input {
        position: sticky;
        bottom: 0;
        z-index: 10;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.message-wrapper {
    width: 100%;
    display: flex;
    
    &--request {
        justify-content: flex-end;
    }
    
    &--response {
        justify-content: flex-start;
    }
}
</style>
