var pepsis = new Vue({
    el: "#pepsi",
    data: {
        message: "正在获取json数据......"
    },
    mounted(){
        axios
            .get("json/news.json")
            .then(response => this.message = response.data.urls)
            .catch(function(error){
                console.log(error)
            })
    }
});