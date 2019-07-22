Vue.component("greeting",{
    template:`
        <p>大家好{{name}}
        <button v-on:click="changeName">改名</button>
        </p>
        `,
    data:function () {
        return {
            name:"yangbin1"
        }
    },
    methods:{
        changeName:function () {
            this.name = "Henry";
        }
    }
})

//实例化 vue对象
new Vue({
    el: "#vue-app-one"
});

//实例化 vue对象
new Vue({
    el: "#vue-app-two"
});

