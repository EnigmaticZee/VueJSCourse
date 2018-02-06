<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <br>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                <transition-group name="fade">
                    <button class="btn btn-primary" @click="addItem">Add Item</button>
                    <br><br>
                        <li class="list-group-item"
                            v-for="(number,index) in numbers"
                            style="cursor: pointer"
                            @click="removeItem(index)"
                            :key="number"
                        >{{number}}</li>
                </transition-group>
                </ul>








                <hr>
                <select v-model="animatedAnime" class="form-control">
                    <option value="animated bounce">Bounce</option>
                    <option value="animated flash">Flash</option>
                </select><br><br>
                <transition appear
                            :enter-active-class="animatedAnime"
                            :leave-active-class="animatedAnime"
                >
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else="show" key="warning">This is some info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
                <transition
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"

                        @before-leave="beforeLeave"
                        @leave="leave"
                        @after-leave="afterLeave"
                        @leave-cancelled="leaveCancelled"
                        :css="false"
                >
                    <div style="width: 100px; height: 100px; background-color: green" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                        @click="selectedComponent == 'app-danger-alert' ?
                        selectedComponent = 'app-success-alert' : selectedComponent = 'app-danger-alert'"
                >Toggle</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'
    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade',
                animatedAnime: 'animated bounce',
                load: true,
                elementWidth: 100,
                selectedComponent: 'app-danger-alert',
                numbers: [1,2,3,4,5]
            }
        },
        methods: {
            beforeEnter(el){
                console.log('Before Enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px'
            },
            enter(el, done){
                console.log('Enter');
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 10){
                        clearInterval(interval);
                        done();
                    }
                },20)
            },
            afterEnter(el){
                console.log('After Enter')
            },
            enterCancelled(el){
                console.log('Enter Cancelled')
            },

            beforeLeave(el){
                console.log('Before Leave')
                this.elementWidth = 200;
                el.style.width = '200px'
            },
            leave(el, done){
                console.log('Leave')
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 10){
                        clearInterval(interval);
                        done();
                    }
                },20)
            },
            afterLeave(el){
                console.log('After Leave');
            },
            leaveCancelled(el){
                console.log('Leave Cancelled')
            },
            removeItem(index){
                this.numbers.splice(index,1)
            },
            addItem(){
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }

    .fade-leave{
    }

    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave{

    }

    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .fade-move{
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
