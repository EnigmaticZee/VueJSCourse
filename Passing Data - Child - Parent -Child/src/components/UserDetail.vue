<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFn">Reset</button>
    </div>
</template>

<script>
    export default {
        //To validate props it must be an object
        props: {
            //name: String
            myName: {
                type: String
            },
            //custom event
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName(){
                return this.myName;
            },
            resetName(){
                this.myName = 'Zaid';
                //Emit the change to the parent
                this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
