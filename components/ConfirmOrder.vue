<template>
  <div class="container">
    <div class="delivery-details">
      <div class="delivery-inner">
        <div class="adress-details">
          <div>
            <h3>ADRESA ZA DOSTAVU</h3>
            <p>{{ formData.ime }} {{ formData.prezime }}</p>
            <p>{{ formData.adresa }}</p>
            <p>{{ formData.postBroj }} {{ formData.mjesto }}</p>
            <p>{{ formData.telefon }}</p>
          </div>
          <button class="edit-adress-btn" @click="emit('decrementStep')"><span class="gradient-text">UREDI</span></button>
        </div>
        <div v-if="formData.r1" class="adress-details">
          <div>
            <h3>RAČUN NA TVRTKU</h3>
            <p>{{ formData.tvrtka }}</p>
            <p>{{ formData.oib }}</p>
          </div>
          <button class="edit-adress-btn" @click="emit('decrementStep')"><span class="gradient-text">UREDI</span></button>
        </div>
      </div>
      <div class="delivery">
        <p class="expected">OČEKIVANA ISPORUKA: </p>
        <p>{{ expectedDelivery }}</p>
      </div>
    </div>
    <div class="row">
      <div class="payment-method">
        <h3>ODABERITE NAČIN PLAĆANJA</h3>
        <div v-if="error" class="error">
          <p>Molimo odaberite način plaćanja!</p>
        </div>
        <div class="input-row">
          <CustomRadioInput text="Gotovinom pri preuzimanju" name="payment" value="Gotovinom pri preuzimanju" :checkedIf="formData.nacinPlacanja === 'Gotovinom pri preuzimanju'" @click="emit('savePaymentMethod', $event)" required="true" />
        </div>
        <div class="input-row">
          <CustomRadioInput text="Općom uplatnicom / internet bankarstvom" name="payment" value="Općom uplatnicom / internet bankarstvom" :checkedIf="formData.nacinPlacanja === 'Općom uplatnicom / internet bankarstvom'" @click="emit('savePaymentMethod', $event)" required="true" />
        </div>
        <div class="input-row">
          <CustomRadioInput text="Online plaćanje karticom" name="payment" value="Online plaćanje karticom" :checkedIf="formData.nacinPlacanja === 'Online plaćanje karticom'" @click="emit('savePaymentMethod', $event)" required="true" />
        </div>
      </div>
      <div class="price-total">
        <div class="base">
          <p>Osnovica:</p>
          <p class="price gradient-text">{{ (total / 1.25).toFixed(2) }}€</p>
        </div>
        <div class="tax">
          <p>Porez iznos:</p>
          <p class="price gradient-text">{{ (total - (total / 1.25)).toFixed(2) }}€</p>
        </div>
        <div class="total">
          <p>Ukupno:</p>
          <p class="price gradient-text">{{ total.toFixed(2) }}€</p>
        </div>
        <button class="complete-order-btn" @click="emit('handleOrderSubmit')">ZAVRŠI NARUDŽBU</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["formData", "total", "error"]);
  const emit = defineEmits(["decrementStep", "savePaymentMethod", "handleOrderSubmit"]);
  const expectedDelivery = ref("");

  onMounted(() => {
    const calculateExpectedDelivery = () => {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 2);
      if (deliveryDate.getMonth() !== new Date().getMonth()) {
          deliveryDate.setDate(1);
          deliveryDate.setDate(deliveryDate.getDate() + 2);
      }
      const endDeliveryRange = new Date(deliveryDate);
      endDeliveryRange.setDate(endDeliveryRange.getDate() + 2);
      return { start: deliveryDate, end: endDeliveryRange };
    }

    const formatDateWithoutSpaces = date => {
        const parts = date.split('. ');
        return parts.join('.');
    }

    const { start, end } = calculateExpectedDelivery();
    expectedDelivery.value = formatDateWithoutSpaces(start.toLocaleDateString()) + " - " + formatDateWithoutSpaces(end.toLocaleDateString());
  });
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.delivery-details {
  border: 1px solid #dededf;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.delivery-inner {
  width: 100%;
  padding: 20px 25px;
  display: flex;
}

.delivery {
  background: #f5f5f5;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  gap: 5px;
  margin-top: 15px;
  font-size: 15px;
}

p,
h3 {
  padding: 0;
  margin: 0;
}

h3 {
  margin-bottom: 15px;
}

.expected {
  font-weight: 600;
}

.adress-details {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 100px;
}

.adress-details p {
  margin: 0;
  padding: 0;
  color: var(--textClr);
}

.edit-adress-btn {
  border: 1px solid transparent;
  border-radius: 5px;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 5px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
}

.edit-adress-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.row {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}

.payment-method {
  border: 1px solid #dededf;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 25px;
}

.price-total {
  border: 1px solid #dededf;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 25px;
}

.base,
.tax,
.total {
  font-size: 13pt;
  display: flex;
  justify-content: space-between;
}

.price {
  font-weight: 600;
}

.complete-order-btn {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  color: white;
  display: inline-block;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
  text-decoration: none;
  font-size: 15px;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
}

.complete-order-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.error {
  text-transform: uppercase;
  background-color: #dd2222;
  width: 100%;
  color: white;
  font-weight: 600;
  padding: 5px 15px;
  font-size: 10pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
}

.error::after {
  content: url("https://api.iconify.design/material-symbols/info.svg?color=white&width=25&height=25");
  position: relative;
  top: 2px;
}

@media screen and (max-width: 1005px) {
  .delivery-inner {
    flex-direction: column;
    gap: 30px;
  }
  .row {
    flex-direction: column;
  }
  .complete-order-btn {
    margin-top: 20px;
  }
}

@media screen and (max-width: 650px) {
  .adress-details {
    font-size: 14px;
  }
  .delivery {
    font-size: 13px;
  }
  .payment-method {
    font-size: 14px;
  }
  .price {
    font-size: 16px;
  }
  .base,
  .tax,
  .total {
    font-size: 16px;
  }
  .complete-order-btn {
    font-size: 13px;
  }
  .edit-adress-btn {
    font-size: 12px;
  }
  .error {
    font-size: 11px;
    padding: 5px 10px;
  }
  .error::after {
    content: url("https://api.iconify.design/material-symbols/info.svg?color=white&width=20&height=20")
  }
}

@media screen and (max-width: 540px) {
  .delivery {
    font-size: 14px;
  }
  .adress-details {
    gap: 20px;
    justify-content: space-between;
  }
}

@media screen and (max-width: 425px) {
  .delivery p {
    font-size: 9pt;
  }
}
</style>