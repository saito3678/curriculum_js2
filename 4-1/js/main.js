var app = new Vue({
    el:"#app",
    data: {
        list: [],
        addText: "",
        noExist: "",
        noComplete: "",
        total: "",
        search: "",
        originalList: "",
    },
    // watchでlistの変更を監視
    watch: {
        originalList: {
            handler: function() {
                localStorage.setItem("original", JSON.stringify(this.list));
            }
        },
        list: {
            handler: function() {
                // localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
                if(this.list.length > 0) {
                    this.noExist=""
                    this.total=this.list.length
                    this.noComplete=this.list.filter(todo => !todo.isChecked).length;
                }else {
                    this.noExist="現在タスクはありません"
                    this.total=0
                    this.noComplete=0
                };
                this.noComplete=this.total.length-todo.isChecked.length
            },
            deep: true,
        },
        search: {
            handler: function() {
                if(this.search === "") {
                    this.list = this.originalList;
                } else {
                    this.list = this.list.filter(todo => todo.text.includes(this.search));
                }
            },
            deep: true
        },
    },
    // マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
        this.originalList = JSON.parse(localStorage.getItem("original")) || [];
        if(this.list.length > 0) {
            this.noExist=""
            this.total=this.list.length
            this.noComplete=this.list.filter(todo => !todo.isChecked).length;
        } else {
            this.noExist="現在タスクはありません"
            this.total=0
            this.noComplete=0
        }
    },
    methods: {
        addToDo: function() {
            if (this.addText !== "") {
                this.list.push({
                    text: this.addText,
                    isChecked: false,
                }),
                this.originalList.push({
                    text: this.addText,
                })
            }
            this.addText = "";
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    }
});