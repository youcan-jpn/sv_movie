<template>
    <div>
        <p>全部で{{ moviesCount }}本の動画が登録されています。</p>
        <input type="button" :value="panelText" id="inputButton" @click="toggleInputPanel"/>
        <MovieInput v-show="show"/>
        <hr/>
        <table v-if="movies.length">
            <tr>
                <th>ID</th>
                <th>年度</th>
                <th>科目</th>
                <th>日付</th>
                <th>開始時刻</th>
                <th>リンク</th>
                <th>編集</th>
            </tr>
            <MovieListItem
              v-for="movie in movies"
              :key="movie.id"
              :movie="movie"
              @edit="editMovie"
            />
        </table>
        <p v-else>その条件に該当する動画データは存在しません。</p>
    </div>
</template>

<script>
import MovieInput from "./MovieInput.vue"
import MovieListItem from "./MovieListItem.vue"
import { mapGetters } from "vuex"

export default {
    components: {
        MovieInput, MovieListItem
    },
    data() {
        return {
            show: 0,
            panelText: "追加パネルの表示",
        }
    },
    computed: {
        movies() {
            return this.$store.state.movies
        },
        ...mapGetters(["moviesCount"])
    },
    methods: {
        editMovie() {
            console.log('edit movie info')
        },
        toggleInputPanel() {
            this.show = (this.show + 1) % 2
            if (this.show === 1){
                this.panelText = "追加パネルを非表示"
            } else {
                this.panelText = "追加パネルを表示"
            }
        }
    }
}
</script>