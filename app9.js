//实例化 vue对象
var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "app one"
    },
    methods: {},
    computed: {
        greet: function () {
            return "hello app one";
        }
    }
});

//实例化 vue对象
var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two"
    },
    methods: {
        changeTitle: function () {
            one.title = "已经改名";
        }
    },
    computed: {
        greet: function () {
            return "hello app two";
        }
    }
});

two.title = "app two 发生变化"