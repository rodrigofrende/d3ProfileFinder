<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="onSubmit">

          <!-- Grupo 1 (Input texto) -->
          <b-form-group
            id="input-group-1"
            label="Tag de Batalla:"
            label-for="input-text"
            description="Formato: TuPerfil#1234"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="Tag de Batalla"
            />
          </b-form-group>

          <!-- Grupo 2 (Selector de región) -->
          <b-form-group id="input-group-3" label="Región:" label-for="input-region">
            <b-form-select
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required
            />
          </b-form-group>

          <!-- Botón envío -->
          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="primary" size="lg">Enviar</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
    name: 'HomeForm', //MainForm
    data() {
        return {
            form: {
                battleTag: '',
                region: 'eu'
            }
        }
    },
    computed: {
        regions () {
            return regions.map(region => ({ value: region, text: region.toUpperCase() }))
        }
    },
    methods: {
        onSubmit () {
            const { region, battleTag} = this.form
            this.$router.push({ name:'Profile', params: { region, battleTag: battleTag.replace('#','-')}})
        }
    }
}
</script>