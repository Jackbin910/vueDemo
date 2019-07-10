//实例化 vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"yangbin1",
        job:"开发"
    },
    methods:{
        greet:function (time) {
            return 'good ' + time + " " + this.name +"!";
        }
    }
});

/*
 * el:element 需要获取的元素，一定是html根容器元素
 */
