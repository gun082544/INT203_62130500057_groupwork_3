const app = {
    data() {
        return {
            pictures: [
                { path: './images/1.jpeg', description: 'test1' ,showFav: false },
                { path: './images/2.jpeg', description: 'test2' ,showFav: false},
                { path: './images/3.jpeg', description: 'test3' ,showFav: false}
            ],
            path:"./images/1.jpeg"
        }
    },
    methods:{
        showFavIcon(index){
            this.pictures[index].showFav = !this.pictures[index].showFav;
        }
    },
    computed:{
        countTotal(){
            return this.pictures.length;
        },
        countShow(){
            return this.pictures.filter(s => s.showFav).length;
        }
    }
};
Vue.createApp(app).mount('#app');