<template>
    <tr>
        <td>{{ movie.id }}</td>
        <td>{{ movie.year }}</td>
        <td>{{ movie.subject }}</td>
        <td>{{ classDate }}</td>
        <td>{{ start }}</td>
        <td>{{ movie.link }}<a href=""><img src="@/assets/copy_logo.png" height="18" @click="copyLink"/></a></td>
        <td><input type="button" value="edit" @click="$emit(edit)"/></td>
    </tr>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object
        }
    },
    computed: {
        classDate: function() {
            const targetDate = this.movie.date
            let month = targetDate.getMonth() + 1
            let date = targetDate.getDate()
            return month + "/" + date
        },
        start: function() {
            const target = this.movie.date
            let hour = target.getHours()
            let minute = target.getMinutes()
            return hour + ":" + minute
        }
    },
    methods: {
        copyLink: function() {
            let copyFrom = document.createElement("textarea")
            copyFrom.textContent = this.movie.link
            let bodyElm = document.getElementsByTagName("body")[0]
            bodyElm.appendChild(copyFrom)
            copyFrom.select()
            let retLink = document.execCommand("copy")
            bodyElm.removeChild(copyFrom)
            return retLink
        }
    }
}
</script>

<style scoped>
img {
    padding-top: 12px;
    margin-left: 12px;
}
</style>