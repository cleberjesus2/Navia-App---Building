<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>

                <ion-button @click = "openMenu()" slot="start">
                    <ion-icon icon="menu"></ion-icon>
                </ion-button>
                <ion-tittle>{{ PageTitle }} </ion-tittle>    
            </ion-toolbar>
         </ion-header>

         <ion-content> 
            <slot>
                
            </slot>
         </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonContent, IonTittle, IonToolbar, IonButtons, IonIcon, menuController } from "ionic/vue";
    import { menu } from '@ionicons/icons';

    export default{
        components:{
            IonPage, IonHeader, IonContent, IonTittle, IonToolbar, IonButtons, IonIcon, 
        }, props: ['PageTitle'], data(){
            return{
                menu
            }
        },
        methods:{
            openMenu(){
                menuController.open("app-menu");
            }
        },
    }
</script>