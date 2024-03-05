<style> .v-overlay__scrim { opacity: 0.04 !important; } </style>
<template>
  <div id="bg-wrap">
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
  <defs>
  <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(50, 33, 92, 1)"></stop><stop offset="100%" stop-color="rgba(50, 33, 92, 0)"></stop></radialGradient>
  <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(81, 32, 119, 1)"></stop><stop offset="100%" stop-color="rgba(81, 32, 119, 0)"></stop></radialGradient>
  <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(218, 180, 203, 1)"></stop><stop offset="100%" stop-color="rgba(218, 180, 203, 0)"></stop></radialGradient>
  <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
  <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
  <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
  </defs>
  <!--<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
  <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
  <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"/>
  </rect>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
  <animate attributeName="x" dur="23s" values="0%;-25%;0%" repeatCount="indefinite" />
  <animate attributeName="y" dur="24s" values="25%;-25%;25%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"/>
  </rect>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
  <animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite" />
  <animate attributeName="y" dur="26s" values="0%;-25%;0%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"/>
  </rect>-->
  <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="30s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"></animateTransform></rect>
  <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="33s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="22s" repeatCount="indefinite"></animateTransform>
  </rect>
  <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="35s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"></animateTransform>
  </rect>
  </svg>
</div> 
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog  v-model="value" persistent width="800px"  >
        <v-card  class="rounded-xl">
          <v-img height="180" cover src="@/img/fondo_nombre1.png" class="d-flex justify-center align-center text-center">
              <v-card :title="textoTitulo" class="text-white" color="rgba(0, 0, 0, 0)" variant="flat">
                  <v-avatar color="#32215C" size="60">
                      <v-icon large>
                        mdi-database-export-outline
                      </v-icon>
                  </v-avatar>
              </v-card>
          </v-img>
          <!-- <v-img height="120"  cover lazy-src="../img/fondo_nombre1.png"  src="../img/fondo_nombre1.png">
            <v-card :title="textoTitulo" class="text-white" color="rgba(0, 0, 0, 0)" variant="flat">
              <v-avatar color="#32215C" size="60">
                  <v-icon large>
                    mdi-database-export-outline
                  </v-icon>
              </v-avatar>
            </v-card> -->
            <!-- <v-card-title class="mx-auto text-white text-wrap text-center justify-center align-center" style="width: 100%; white-space: normal;"><br><br>{{ textoTitulo }}</v-card-title> -->
          <!-- </v-img> -->
          <v-card-title class="text-center" style="font-size: 1em">
            Creación de Base de Datos
          </v-card-title>
          <v-card-text class="text-center">
            <v-container fluid>
              <v-sheet class="mx-0 px-0" min-height="20vh" rounded="lg" elevation="1">
                <p v-for="alert in alerts" :key="alert">
                    {{ alert }}
                </p>
              </v-sheet>
            </v-container>
            <v-progress-linear color="#32215C" class="my-3" :indeterminate="progress" rounded :model-value="cuentaPasos"  :height="13">
              <strong>{{ Math.round(cuentaPasos) }}%</strong>
            </v-progress-linear>
            <v-divider class="my-1"></v-divider>
            <v-container fluid>
              <v-row class="d-flex flex-md-row flex-column justify-center align-center text-center">
                <v-col col="12" xs="12" sm="12" md="4" lg="4" class="text-center">
                  <p class="my-1">Configuración</p>
                  <v-btn icon="mdi-database-cog-outline" color="#32215C" size="large" @click="abreDialogTablas"></v-btn>
                </v-col>
                <v-col col="12" xs="12" sm="12" md="4" lg="4" class="text-center">
                  <p class="my-1">Iniciar</p>
                  <v-btn icon="mdi-play-circle-outline" color="#32215C" size="large" :disabled="progress" :loading="progress" @click="iniciaMigracion"></v-btn>
                </v-col>
                <v-col col="12" xs="12" sm="12" md="4" lg="4" class="text-center">
                  <p class="my-1">Difundir</p>
                  <v-btn icon="mdi-source-branch" color="#32215C" :disabled="progress" :loading="progress" size="large"></v-btn>
                </v-col>
              </v-row>
            </v-container>
            
          </v-card-text>
          <v-divider class="mx-auto"></v-divider>
          <v-card-title style="font-size: 0.87em" class="justify-center text-center text-wrap"> 
            <strong>Instituto Electoral de la Ciudad de México © {{ new Date().getFullYear() }}</strong> 
            <p>Huizaches 25, Colonia Rancho Los Colorines, Tlalpan, C.P. 14386, Ciudad de México. {{ new Date().getFullYear() }}</p>
          </v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog  v-model="dialogTablas" persistent scrollable width="auto" :retain-focus="false">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <v-banner  lines="two" icon="mdi-database-outline" color="#32215C" class="text-center align-center justify-center" :sticky="true">
              <v-banner-text>
                Base de datos MSSQL <strong>prep2021</strong> => SQLite <strong>database.db3</strong> 
              </v-banner-text>
            </v-banner>
            <!-- <div class="text-h5 text-medium-emphasis ps-2">
              Base de datos sicodid2021
            </div> -->
            <v-btn
              icon="mdi-close"
              variant="text"
              color="red"
              @click="dialogTablas = false"
            ></v-btn>
          </v-card-title>

          <!-- <v-divider class="mb-4"></v-divider> -->

          <v-card-text>
            <div class="text-medium-emphasis mb-4">
              <v-container fluid>
                <v-row class="d-flex flex-md-row flex-column justify-center align-center text-center">
                  <v-col col="12" xs="12" sm="12" md="7" lg="7" class="text-center">
                    <p>Selecciona al menos una o más tablas </p>
                  </v-col>
                  <v-col col="12" xs="12" sm="12" md="3" lg="3" class="text-center">
                    <v-btn class="text-none" color="#32215C" rounded="xl" text="Por defecto" variant="flat" :disabled="progress" :loading="progress" @click="defecto"
                    ></v-btn>
                  </v-col>
                  <v-col col="12" xs="12" sm="12" md="2" lg="2" class="text-center">
                    <v-btn class="text-none" color="#32215C" rounded="xl" icon="mdi-timer-cog-outline" variant="flat" @click="abreDialogTiempo"
                    ></v-btn>
                  </v-col>
                </v-row>
              </v-container>            
            </div>

            <!-- <div class="mb-2">Tablas (No todos obligatorias)</div> -->

            <v-data-table
              :headers="headers" item-key="id" item-value="nombreTabla" items-per-page="25" transition="scale-transition" color="#32215C" :items="desserts"
              show-select fixed-header multi-sort  :height="desserts.length < 10 ? 'auto': '540'" return-object v-model="selected"
            ></v-data-table>

          </v-card-text>

          <v-divider class="mt-2"></v-divider>

          <v-card-actions class="my-2 d-flex justify-end">
            <v-btn class="text-none" rounded="xl" text="Cancelar" @click="dialogTablas = false"
            ></v-btn>

            <v-btn class="text-none" color="#32215C" rounded="xl" text="Guardar" variant="flat" :loading="progress" 
            :disabled="selected.length == 0 || progress == true ? true : false" @click="guardarDatosTablas"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogTiempo" persistent max-width="650" :retain-focus="false">
          <v-card class="rounded-xl">
              <v-img height="180" cover src="@/img/fondo_nombre1.png" class="d-flex justify-center align-center text-center">
                  <v-card title="Configuración de intervalos" class="text-white" color="rgba(0, 0, 0, 0)" variant="flat">
                      <v-avatar color="#32215C" size="60">
                          <v-icon large>
                            mdi-timer-settings-outline
                          </v-icon>
                      </v-avatar>
                  </v-card>
              </v-img>
              <v-card-text>
                <v-container fluid>
                  <v-row class="d-flex flex-md-row flex-column justify-center align-center text-center">
                    <v-col col="12" xs="12" sm="12" md="5" lg="5" class="text-center align-center">
                      <v-switch
                        v-model="switchT"
                        :label="switchT == true? 'Habilitado': 'Deshabilitado'"
                        hide-details
                        color="#32215C"
                        inset
                      ></v-switch>
                    </v-col>
                    <v-col col="12" xs="12" sm="12" md="4" lg="4" class="text-center">
                      <v-text-field
                        v-model="tiempo"
                        color="#32215C"
                        variant="outlined"
                        label="Tiempo en minutos"
                        @keydown="filter($event)"
                        :maxlength="3"
                        :disabled="!switchT"
                        suffix="minutos"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                  <v-btn class="text-none" rounded="xl" @click="dialogTiempo = false"> Cerrar </v-btn>
                  <v-btn class="text-none" rounded="xl" :loading="progress" variant="flat" :disabled="(progress == true || tiempo === '' && switchT == true || tiempo == '0' && switchT == true)? true : false" color="#32215C" @click="guardaIntervalos"> Guardar </v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  <v-snackbar v-model="snackbar" vertical :timeout="2000" :color="colorSnackbar" location="top"  elevation="24">
    <div class="text-subtitle-1 "><v-icon left>mdi-information-outline</v-icon> {{ textoTituloSnackbar }}</div>
    <p>{{ textoSnackbar }}</p>
    <template v-slot:actions>
      <!-- <v-btn variant="text" @click="snackbar = false">
        Cerrar
      </v-btn> -->
    </template>
  </v-snackbar>
</template>

<script lang="ts">
  import { useVuelidate } from '@vuelidate/core'
  import "@fontsource/montserrat/600.css";
  import type {Axios} from 'axios'
  import { useSystemStore } from '@/store/store';
  import { Usuario, Response, tablasMSQL } from '@/models/types';
  let clock: any;
  declare module '@vue/runtime-core' {
      export interface ComponentCustomProperties {
          $axios: Axios
          catTags: string[]
      }
  }
  
  export default {
    name: 'InicioLogin',

    setup(){
      return{
        v$: useVuelidate()
      }
    },

    data() {
      return {
        value: <boolean>true, 
        show1: <boolean>false,
        snackbar: <boolean>false,
        textoTituloSnackbar: <string>'',
        textoSnackbar: <string>'',
        colorSnackbar: <string>'',
        progress: <boolean>false,
        total: <number>2,
        cuentaPasos: <number>0,
        dialogTablas: <boolean>false,
        dialogTiempo: <boolean>false,
        switchT: <boolean>false,
        replaySemforo: <number>0,
        semaforo: <string>'',
        texto:<string>'',
        tiempo: <string>'',
        i: <number>0,
        textoTitulo: <string>'Migración de Información PREP 2024',
        headers: <Array<any>>[
          {
            title: 'Nombre de la tabla',
            align: 'start',
            key: 'nombreTabla',
          },
          { title: 'Descripción', align: 'end', key: 'descripcion' },
        ],
        selected: <Array<tablasMSQL>>[],
        desserts: <Array<tablasMSQL>>[
          {
            id: 1,
            nombreTabla: 'cain_cat_delegacion',
            descipcion: ''
          },
          {
            id: 2,
            nombreTabla: 'cain_cat_dist_dele',
            descipcion: ''
          },
          {
            id: 3,
            nombreTabla: 'cain_cat_distrito',
            descipcion: ''
          },
          {
            id: 4,
            nombreTabla: 'dig_actas_prep',
            descipcion: ''
          },
          {
            id: 5,
            nombreTabla: 'prep_cat_inconsistencias',
            descipcion: ''
          },
          {
            id: 6,
            nombreTabla: 'prep_inconsistencias',
            descipcion: ''
          },
          {
            id: 7,
            nombreTabla: 'prep_votos',
            descipcion: ''
          },
          {
            id: 8,
            nombreTabla: 'scd_candidatos_jdel',
            descipcion: ''
          },
          {
            id: 9,
            nombreTabla: 'scd_candidatos_jgob',
            descipcion: ''
          },
          {
            id: 10,
            nombreTabla: 'scd_candidatos_mr',
            descipcion: ''
          },
          {
            id: 11,
            nombreTabla: 'scd_casillas',
            descipcion: ''
          },
          {
            id: 12,
            nombreTabla: 'scd_casillas_voto_ext',
            descipcion: ''
          },
          {
            id: 13,
            nombreTabla: 'scd_cat_participantes',
            descipcion: ''
          },
          {
            id: 14,
            nombreTabla: 'scd_cat_tipo_eleccion',
            descipcion: ''
          },
          {
            id: 15,
            nombreTabla: 'scd_participantes_jdel',
            descipcion: ''
          },
          {
            id: 16,
            nombreTabla: 'scd_participantes_jgob',
            descipcion: ''
          },
          {
            id: 17,
            nombreTabla: 'scd_participantes_mr',
            descipcion: ''
          },
          {
            id: 18,
            nombreTabla: 'scd_participantes_rp',
            descipcion: ''
          },
        ],
        pasos: <boolean>false,
        msg:<string>'',
        alerts: <Array<string>>[]
      }
    },
    validations(){
    },
    computed:{
    },
    methods:{
      defecto(){
        this.selected = <Array<tablasMSQL>>[
          {
            id: 6,
            nombreTabla: 'prep_inconsistencias',
            descipcion: ''
          },
          {
            id: 7,
            nombreTabla: 'prep_votos',
            descipcion: ''
          },
          {
            id: 8,
            nombreTabla: 'scd_candidatos_jdel',
            descipcion: ''
          },
          {
            id: 9,
            nombreTabla: 'scd_candidatos_jgob',
            descipcion: ''
          },
          {
            id: 10,
            nombreTabla: 'scd_candidatos_mr',
            descipcion: ''
          },
          {
            id: 12,
            nombreTabla: 'scd_casillas_voto_ext',
            descipcion: ''
          },
          {
            id: 15,
            nombreTabla: 'scd_participantes_jdel',
            descipcion: ''
          },
          {
            id: 16,
            nombreTabla: 'scd_participantes_jgob',
            descipcion: ''
          },
          {
            id: 17,
            nombreTabla: 'scd_participantes_mr',
            descipcion: ''
          },
          {
            id: 18,
            nombreTabla: 'scd_participantes_rp',
            descipcion: ''
          },
        ];
      },
      filter: function(event: any){
        const code = window.Event ? event.which : event.keyCode;
        console.log(code);
        const isSpecial =
          code === 37 ||
          code === 39 ||
          code === 8 ||
          code === 46 ||
          code === 35 ||
          code === 36;
          // code === 190;
        const isDigit = code >= 48 && code <= 57;
        const isKeypad = code >= 96 && code <= 105;
        if (!isSpecial && !isDigit && !isKeypad) {
          // if not number or special (arrows, delete, home, end)
          event.preventDefault();
          return false;
        }
      },
      iniciaMigracion(){
        this.cargaInicial();
        if ( (this.selected).length == 0 ){
          this.mensajeFaltantesTablas();
        }else{
          this.coordinaTablas();
        }
        // (this.selected).length == 0 ? this.coordinaTablas(this.selected) : this.colorSnackbar = 'purple-lighten-2', this.textoTituloSnackbar = 'Atención', this.textoSnackbar = 'Selecciona al menos una tabla para realizar la migración en el apartado de Configuración', this.snackbar = true;
        
        // let Response1 = <Response>{status: 0, data:{ok:false, msg: ''}}; 
        // let Response2 = <Response>{status: 0, data:{ok:false, msg: ''}};
        // let Response3 = <Response>{status: 0, data:{ok:false, msg: ''}};
        // let total = 1;
        // this.alerts = [];
        // this.cuentaPasos = 0;
        // this.progress = true;
        // const headers = {
        //   'Content-Type': 'application/json'
        // }
        // this.alerts.push('Iniciando migración');
        // Response1 = <Response> await this.$axios.get('/migracion/prep_votos', { headers: headers })
        //   .then(function(response) {
        //     console.log(response.data);
        //     return response;
        //   }).catch(function(error) {
        //     console.log(error);
        //     return Promise.resolve( error);
        //   });
        //   console.log(Response1);
        // if(Response1.status === 200){
        //   this.textoTituloSnackbar = 'Correcto';
        //   this.textoSnackbar = <string>(Response1.data.msg);
        //   this.colorSnackbar = 'green';
        //   this.snackbar = true;
        //   this.pasos = false;
        //   this.progress = false;

        //   this.cuentaPasos = this.calculaProgreso(1,total);
        //   this.alerts.push(<string>Response1.data.msg);
        // } else { 
        //   this.pasos = false;
        //   this.alerts.push(<string>Response1.response.data.msg);
        //   this.colorSnackbar = 'red-darken-2';
        //   this.textoTituloSnackbar = 'Error';
        //   this.textoSnackbar = <string>Response1.response.data.msg;
        //   this.snackbar = true;
        //   this.progress = false;
        // }
        // Response1 = <Response> await this.$axios.get('/migracion/scd_casillas', { headers: headers })
        //   .then(function(response) {
        //     console.log(response.data);
        //     return response;
        //   }).catch(function(error) {
        //     console.log(error);
        //     return Promise.resolve( error);
        //   });
        //   console.log(Response1);
        // if(Response1.status === 200){
        //   this.textoTituloSnackbar = 'Correcto';
        //   this.textoSnackbar = <string>(Response1.data.msg);
        //   this.colorSnackbar = 'green';
        //   this.snackbar = true;
        //   this.pasos = false;
        //   this.cuentaPasos = this.calculaProgreso(1,total);
        //   this.alerts.push(<string>Response1.data.msg);
        //   Response2 = <Response> await this.$axios.get('/migracion/prep_votos', { headers: headers })
        //   .then( function(response){
        //       console.log(response.data);
        //       return response;
        //   }).catch( function(error){
        //     console.log(error)
        //       return Promise.resolve(error);
        //   });
        //   console.log(Response2);
        // } else { 
        //   this.pasos = false;
        //   this.alerts.push(<string>Response1.response.data.msg);
        //   this.colorSnackbar = 'red-darken-2';
        //   this.textoTituloSnackbar = 'Error';
        //   this.textoSnackbar = <string>Response1.response.data.msg;
        //   this.snackbar = true;
        //   this.progress = false;
        // }
        // if(Response2.status === 200){
        //   this.cuentaPasos = this.calculaProgreso(2,total);
        //   // this.progress = false;
        //   this.alerts.push(<string>Response2.data.msg);
        //   this.textoTituloSnackbar = 'Correcto';
        //   this.textoSnackbar = <string>Response2.data.msg;
        //   this.colorSnackbar = 'green';
        //   this.snackbar = true;
        //   Response3 = <Response> await this.$axios.get('/migracion/cain_cat_delegacion', { headers: headers })
        //   .then( function(response){
        //       console.log(response.data);
        //       return response;
        //   }).catch( function(error){
        //     console.log(error)
        //       return Promise.resolve(error);
        //   });
        //   console.log(Response3);
        // } else {
        //   this.progress = false;
        //   this.alerts.push(<string>Response2.response.data.msg);
        //   this.colorSnackbar = 'red-darken-2';
        //   this.textoTituloSnackbar = 'Error';
        //   this.textoSnackbar = <string>Response2.response.data.msg;
        //   this.snackbar = true;
        // }
        // if(Response3.status === 200){
        //   this.cuentaPasos = this.calculaProgreso(3,total);
        //   this.progress = false;
        //   this.alerts.push(<string>Response3.data.msg);
        //   this.textoTituloSnackbar = 'Correcto';
        //   this.textoSnackbar = <string>Response3.data.msg;
        //   this.colorSnackbar = 'green';
        //   this.snackbar = true;
        // } else {
        //   this.progress = false;
        //   this.alerts.push(<string>Response3.response.data.msg);
        //   this.colorSnackbar = 'red-darken-2';
        //   this.textoTituloSnackbar = 'Error';
        //   this.textoSnackbar = <string>Response3.response.data.msg;
        //   this.snackbar = true;
        // }
      },
      calculaProgreso(actual:number, total:number){
        console.log(Math.round((actual/total)*100));
        return (actual/total)*100;
      },
      mensajeFaltantesTablas(){
        this.colorSnackbar = 'purple-lighten-2';
        this.textoTituloSnackbar = 'Atención'; 
        this.textoSnackbar = 'Selecciona al menos una tabla para realizar la migración en el apartado de Configuración'; 
        this.snackbar = true;
      },
      async coordinaTablas(){
        this.cargaInicial();
        let Response1 = <Response>{status: 0, data:{ok:false, msg: ''}}; 
        let total = (this.selected).length;
        this.alerts = [];
        this.cuentaPasos = 0;
        this.progress = true;
        const headers = {
          'Content-Type': 'application/json'
        };
        this.alerts.push('Iniciando migración');
        try {
          for(let i=0; i< total; i++){
            Response1 = <Response> await this.$axios.get(`/migracion/${this.selected[i].nombreTabla}`, { headers: headers })
              .then(function(response) {
                console.log(response.data);
                return response;
              }).catch(function(error) {
                console.log(error);
                return Promise.resolve( error);
              });
              console.log(Response1);
            if(Response1.status === 200){
              this.textoTituloSnackbar = 'Correcto';
              this.textoSnackbar = <string>(Response1.data.msg);
              this.colorSnackbar = 'green';
              this.snackbar = true;
              this.pasos = false;
              this.cuentaPasos = this.calculaProgreso(i+1,total);
              this.alerts.push(<string>Response1.data.msg);
            } else { 
              this.pasos = false;
              this.alerts.push(<string>Response1.response.data.msg);
              this.colorSnackbar = 'red-darken-2';
              this.textoTituloSnackbar = 'Error';
              this.textoSnackbar = <string>Response1.response.data.msg;
              this.snackbar = true;
              // this.progress = false;
            }
          }
          this.progress = false;
        } catch (error) {
          console.log(error);
          this.progress = false;
          this.pasos = false;
          this.alerts.push('Atención');
          this.colorSnackbar = 'red-darken-2';
          this.textoTituloSnackbar = 'Error';
          this.textoSnackbar = 'Ha ocurrido un error inesperado 500';
          this.snackbar = true;
        }
      },
      abreDialogTablas(){
        this.cargaInicial();
        this.dialogTablas = true;
      },
      abreDialogTiempo(){
        this.cargaInicial();
        this.dialogTiempo = true;
      },
      guardarDatosTablas(){
        localStorage.setItem('tablas', JSON.stringify(this.selected));
        this.dialogTablas = false;
      },
      guardaIntervalos(){
        if (this.switchT == true){
          localStorage.setItem('flag', this.switchT.toString());
          localStorage.setItem('tiempo', this.tiempo)
        }else{
          localStorage.setItem('flag', 'false'); 
          localStorage.setItem('tiempo', '');
        }
        this.dialogTiempo = false;
      },
      cargaInicial(){
        const tablas = JSON.parse(localStorage.tablas);
        tablas != null || tablas != '' ? this.selected = <Array<tablasMSQL>>tablas : this.selected = [];
        const flag = localStorage.flag, time = localStorage.tiempo;
        flag === null ? this.switchT = false : flag == 'true' ? this.switchT = true: this.switchT = false;
        time === null || time === 'undefined' ?  this.tiempo = '' : this.tiempo = time;
      }
    },  
    mounted(){
      this.cargaInicial();
    },
    created(){
      
    }
    
  }
</script>
