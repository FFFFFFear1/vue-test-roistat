<template>
  <div>
    <button class="btn-addContanct" @click="showModal">Добавить</button>
    <table>
      <thead>
        <th style="cursor: pointer" @click="sortContacts">Имя</th>
        <th>Телефон</th>
      </thead>
      <tbody v-for="item in list" :key="item.index">
        <tr class="table-perent">
          <td>
            <strong>{{ item.name }}</strong>
          </td>
          <td>{{ item.number }}</td>
        </tr>
        <tr class="table-child" v-for="child in item.child" :key="child.index">
          <td>
            <strong>{{ child.name }}</strong>
          </td>
          <td>{{ child.number }}</td>
        </tr>
      </tbody>
    </table>
    <Modal
      v-bind:addContact="addContact"
      v-bind:list="list"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from "../components/modal/Modal";
export default {
  data() {
    return {
      list: [],
      isModalVisible: false,
      sorted: false
    };
  },
  components: {
    Modal
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addContact(info) {
      if (info.perent) {
        this.list.map(item => {
          if (item.name === info.perent) {
            item.child.push({
              name: info.name,
              number: info.number,
              child: []
            });
          }
        });
      } else {
        this.list.push({ name: info.name, number: info.number, child: [] });
      }
    },
    getContacts() {
      if (localStorage.getItem("contacts")) {
        try {
          this.list = JSON.parse(localStorage.getItem("contacts"));
        } catch (e) {
          this.list = [];
        }
      }
    },
    saveContacts() {
      const parsedList = JSON.stringify(this.list);
      localStorage.setItem("contacts", parsedList);
    },
    sortContacts() {
      this.list = this.sorted
        ? [...this.list].sort((a, b) => a.name.localeCompare(b.name))
        : [...this.list].sort((a, b) => b.name.localeCompare(a.name));
      this.sorted = !this.sorted;
    }
  },
  mounted() {
    this.getContacts();
  },
  created() {
    window.addEventListener("unload", this.saveContacts);
  }
};
</script>

<style scoped>
table {
  margin: auto;
  width: 600px;
}
th {
  padding: 10px;
  border: 2px solid #4aae9b;
}
.table-perent td {
  color: white;
  padding: 10px 0;
  background-color: #4aae9b;
}
.table-child td {
  color: white;
  padding: 5px 0;
  background-color: #4aae9c85;
}
.btn-addContanct {
  width: 150px;
  font-size: 17px;
  margin: 0 0 1rem 25rem;
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2em;
  padding: 10px;
}
</style>
