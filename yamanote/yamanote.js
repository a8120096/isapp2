async function resetGame() {
    var sql = `update Game set turn = 0 where id = 1;`;
    var objects = await osql.connect(sql);
    location.href = 'game.html';
}