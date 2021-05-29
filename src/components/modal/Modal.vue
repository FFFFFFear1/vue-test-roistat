<template>
  <div class="modal-background">
    <div class="modal">
      <header class="modal-header">
        <p><strong>Добавление пользователя</strong></p>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>
      <form @submit="add" id="contanct-form">
        <section class="modal-body">
          <label class="modal-field">
            <p>Имя</p>
            <input
              type="text"
              pattern="^[A-Za-zА-Яа-яЁё]+$"
              placeholder="Введите имя..."
              required
              v-model="name"
            />
          </label>
          <label class="modal-field">
            <p>Телефон</p>
            <the-mask
              :mask="['+7 (###) ###-##-##']"
              placeholder="Введите номер телефона..."
              v-model="number"
              required
            />
          </label>
          <label class="modal-field">
            <p>Начальник</p>
            <select v-model="perent">
              <option v-for="item in list" :key="item.index">
                {{ item.name }}
              </option>
            </select>
          </label>
        </section>
        <footer class="modal-footer">
          <input type="submit" class="btn-green" value="Сохранить" />
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
export default {
  components: { TheMask },
  data() {
    return {
      name: "",
      number: "",
      perent: ""
    };
  },
  props: {
    addContact: {
      type: Function
    },
    list: {
      type: Array
    }
  },
  methods: {
    add(event) {
      var phoneMask = this.number.replace(
        /^(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "+7 ($1) $2-$3-$4"
      );
      if (this.number.length >= 10) {
        this.addContact({
          name: this.name,
          number: phoneMask,
          perent: this.perent
        });

        this.close();
        this.name = "";
        this.number = "";
        this.perent = "";
      }

      event.preventDefault();
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 400px;
  height: 300px;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

.modal-header {
  display: grid;
  grid-template-columns: 70% 15%;
  justify-content: space-between;
  align-items: center;
  color: #4aae9b;
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 80%;
  position: relative;
  padding: 20px 20px;
}

.modal-footer {
  padding: 15px;
  display: flex;
  border-top: 1px solid #eeeeee;
}

.btn-close {
  border: none;
  font-size: 20px;
  width: 20px;
  margin: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  width: 150px;
  font-size: 17px;
  border-radius: 1em;
  cursor: pointer;
  padding: 5px;
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
}

.modal-field {
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: center;
}

.modal-field p {
  text-align: left;
}
</style>
