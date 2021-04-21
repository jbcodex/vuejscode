import Vue from 'vue'
export default new Vue({
    methods:{
        sendUser(user){
            this.$emit('sendUser', user)
        },
        sendUserDone(user){
            this.$on('sendUser', user)
        }
    }
})