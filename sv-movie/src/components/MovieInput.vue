<template>
    <div class="movie-insert">
        <h2>動画情報登録</h2>
        <form>
            <label for="year">年度：</label><input type="number" value="2021" name="year" id="year"/><br/>
            <label for="subject">科目：</label>
            <select name="subject" id="subject">
                <option value="" selected disabled>--科目を選択--</option>
                <option value="英文読解">英文読解</option>
                <option value="英文解釈">英文解釈</option>
                <option value="数学1A2B">数学1A2B</option>
                <option value="数学3">数学3</option>
                <option value="国語">国語</option>
                <option value="物理1">物理1</option>
                <option value="物理2">物理2</option>
                <option value="化学">化学</option>
                <option value="世界史">世界史</option>
                <option value="地理">地理</option>
                <option value="高2数学">高2英語</option>
                <option value="高2数学">高2数学</option>
                <option value="高2数学">高2国語</option>
                <option value="高2数学">高2物理</option>
                <option value="高2数学">高2化学</option>
            </select><br/>
            <label for="date">授業日時：</label><input type="datetime-local" name="date" id="date"/><br/>
            <label for="link">動画へのリンク：</label><input type="text" name="link" id="link" size="50"/><br/>
            <input type="button" value="登録する" id="register" @click="register" />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: {

            }
        }
    }
}
</script>

<style>
.movie-insert {
    border: solid cadetblue;
}

form {
    text-align: left;
    padding: 40px;
    margin: 20px;
}
form > #register {
    margin-left: 48%;
    background-color: #abdff3;
    border: none;
    padding: 10px;
    margin-top: 20px;
}
form > #register:hover {
    background-color: #81bdd4;
}
</style>