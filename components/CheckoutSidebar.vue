<template>
  <aside class="checkout-info">
    
    <div v-if="step === 1">  
      <CheckoutTotal :total="sum" />
      <button class="checkout-btn" @click="emit('incrementStep')">ZAVRŠI NARUDŽBU</button>
      <div class="accepted-payments">
        <p>Prihvaćeni načini plaćanja</p>
        <ul>
          <li>Plaćanje pouzećem</li>
          <li>Općom uplatnicom</li>
          <li>Kreditnim ili debitnim karticama</li>
        </ul>
        <div class="cards">
          <img src="/images/payments/premium_visa.png" alt="premium visa">
          <img src="/images/payments/diners.png" alt="diners">
          <img src="/images/payments/visa.png" alt="visa">
          <img src="/images/payments/mastercard.png" alt="mastercard">
          <img src="/images/payments/maestro.png" alt="maestro">
          <img src="/images/payments/aircash.png" alt="aircash">
          <img src="/images/payments/paycek.png" alt="paycek">
        </div>
      </div>
    </div>

    <div v-if="step === 2">
      <div class="your-order">
        <p class="your-order-text">Tvoja narudžba</p>
        <button class="edit-order gradient-border" @click="emit('decrementStep')"><span class="gradient-text">UREDI</span></button>
      </div>
      <div class="checkout-items">
        <div :key="cartItem.id_proizvoda" v-for="cartItem in cartItems">
          <CheckoutItem :proizvod="cartItem" />
        </div>
      </div>
      <CheckoutTotal :total="sum" />
    </div>

  </aside>
</template>

<script setup>
  const props = defineProps(["step", "sum", "cartItems"]);
  const emit = defineEmits(["incrementStep", "decrementStep"]);
</script>

<style scoped>
.checkout-info {
  width: 30%;
  box-shadow: 0px 0px 30px 5px rgb(233, 233, 233);
  padding: 20px;
  height: max-content;
  position: sticky;
  top: 200px;
}

.checkout-btn {
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
  font-size: 13px;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
}

.checkout-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.accepted-payments {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.accepted-payments p {
  font-weight: 500;
}

.accepted-payments ul {
  padding-inline: 30px;
  font-size: 15px;
  margin-top: 5px;
  color: var(--textClr);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
}

.cards img {
  width: 50px;
}

.your-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.your-order-text {
  font-weight: 600;
  font-size: 18px;
}

.edit-order {
  padding: 5px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
}

.checkout-items {
  border-bottom: 1px solid #dededf;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 350px;
  overflow: auto;
}

.checkout-items::-webkit-scrollbar {
  width: 6px;
}

.checkout-items::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

.checkout-items::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgb(45, 56, 138) 0%, rgb(0, 174, 239) 100%); 
  border-radius: 5px;
}

@media screen and (max-width: 1300px) {
  .checkout-info {
    width: 40%;
  }
}

@media screen and (max-width: 1000px) {
  .checkout-info {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .accepted-payments {
    margin-top: 25px;
    font-size: 15px;
  }
  ul li {
    font-size: 14px;
  }
  .cards {
    margin-top: 20px;
    gap: 20px;
  }
  .your-order-text {
    font-size: 16px;
  }
  .edit-order {
    font-size: 12px;
  }
}
</style>