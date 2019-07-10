var app = new Vue({
    el: "#app",
    data: {
        books: [],
        search: '',
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData() {
            var dataFetch = fetch("https://api.myjson.com/bins/zyv02", {
                    method: "GET",
                })
                .then(response => response.json())
                .then(function (json) {

                    app.books = json.books;
                    console.log(app.books);

                })
                .catch(error => console.log("parsing failed ", error))
        },


    },
    computed: {
        filteredBooks: function() {
            var self=this;
            return this.books.filter(function(cust) {
                return (cust.title.toLowerCase().indexOf(self.search.toLowerCase())>=0) || (cust.description.toLowerCase().indexOf(self.search.toLowerCase())>=0);
            }
            
        )
    }}});
