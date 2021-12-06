/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} currentTask Текущий вопрос
 * @property {int} correctAnswers Счетчик правильных ответов
 */
const player = {
    currentTask: 0,
    correctAnswers: 0,

    /**
     * Меняет состояние игрока
     * @param {isCorrect: int} changeState Переключить на следующий вопрос и изменяет количество правильных ответов
     */
    changeState(isCorrect) {
        this.currentTask++;
        this.correctAnswers += isCorrect;
    },

    clear() {
        this.correctAnswers = 0;
        this.currentTask = 0;
    }
};