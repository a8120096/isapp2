async function resetGame() {
    var sql = `update Game set turn = 0 , playernumber = 0 where id = 1;`;
    var objects = await osql.connect(sql);
    location.href = 'waiting.html';
    var sql = `delete from PlayerGame where gameid = 1`;
    var objects = await osql.connect(sql);
}

