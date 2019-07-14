//实例化 vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"yangbin1",
        age: 29,
        x:0,
        y:0
    },
    methods:{
        add:function (inc) {
            this.age += inc;
        },
        subtract:function (dec) {
            this.age -= dec;
        },
        updateXY:function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopmoving:function (event) {
            event.stopPropagation();
        },
        alert:function () {
            alert("hello");
        }
    }
});