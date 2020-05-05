<template>
    <div class="home">
        <div class="button post" @click="post">发送消息</div>
        <div class="button back" @click="back">返回上一页</div>
    </div>
</template>

<script>

export default {
    name: "Home",
    mounted() {
       window['getMsgFromApp']  = (data) => {
           this.handle(data);
       }
    },
    methods: {
        handle(data) {
            console.log(data);
        },
        post() {
            uni.postMessage({
                data: {
                    message: "我是H5发送过来的消息..."
                }
            });
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
};
</script>

<style lang="less">

.button {
    width: 200px;
    height: 35px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: orange;
    border-radius: 8px;
    font-size: 16px;
    color: #ffffff;
}
.post {
    margin-top: 30px;
}
.back {
    margin-top: 15px;
    background: green;
}
</style>
