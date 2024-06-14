<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tap and Earn Game</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        #game { margin: 20px auto; }
        #tap-button { padding: 10px 20px; font-size: 24px; }
        #score { font-size: 24px; margin: 20px; }
    </style>
</head>
<body>
    <div id="game">
        <button id="tap-button">Tap!</button>
        <div id="score">Score: 0</div>
    </div>
    <script>
        let score = 0;
        const scoreElement = document.getElementById('score');
        const tapButton = document.getElementById('tap-button');

        tapButton.addEventListener('click', () => {
            score += 1;
            scoreElement.textContent = `Score: ${score}`;
        });
    </script>
</body>
</html>
