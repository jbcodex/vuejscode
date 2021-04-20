<template>
  <v-app id="app">
    <v-container class="content">
        <Form>
        </Form>
        <Table>
        </Table>
    </v-container>
  </v-app>
</template>

<script>

import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";
export default {
  
   components:{
        Form, Table
    },
    data(){
      return{
        
      }
  }
  
  }
</script>
<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  background-image: linear-gradient(to top, #0f2027, #203a43, #2c5364);
}

.content {
  display: flex;
  justify-content: center;
  margin-top: 270px;
}

.panel {
  display: flex;
  width: 300px;
  height: 330px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 20px 0;
  box-shadow: #0005 1px 1px 18px;
  margin: 10px;
  border-radius: 3px;
}

.panel h2 {
  font-size: 1.2rem;
  color: rgb(25, 26, 36);
  font-weight: 400;
}


</style>

