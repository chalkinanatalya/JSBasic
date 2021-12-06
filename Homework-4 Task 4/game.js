let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (player.currentTask <= 4) {
            // Задаем вопрос и получаем ответ
            let windowTask = '';
            while (Number(windowTask) < 1 || Number(windowTask) > 4 || isNaN(windowTask)) {
                windowTask = prompt(tasks.questions[player.currentTask]);
                if (windowTask == null) {
                    alert('Печально');
                    return;
                }
            }

            // Сравниваем ответ с правильным и изменяем состояние игрока (переходим на следующий вопрос и изменяем, если надо, количество правильных ответов)
            player.changeState(tasks.compareAnswer(player.currentTask, windowTask));

            //Если заданы все вопросы, то предложить сыграить ещё раз. Обнулить текущий вопрос и количество правильных ответов, если 'д'
            if (player.currentTask == 5) {
                let again = prompt("Игра окончена! Правильных ответов: " + player.correctAnswers + ".\nСыграем ещё раз? д/н: ");
                again == 'д' ? player.clear() : alert('Печально');
            }
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        let yn = prompt(`Привет! Давай поиграем в "Кто хочет стать миллионером?": д/н`);

        //Запускаем игру, если "д". Огорчаемся, если "н"
        yn == 'д' ? game.run() : alert('Печально');
    }
};

game.init();