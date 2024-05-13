<template>
  <div class="benefits">
    <div class="benefit">
      <p class="title gradient-text">Brza dostava</p>
      <p class="desc">Unutar 2-4 radnih dana</p>
    </div>
    <div class="benefit">
      <p class="title gradient-text">Plati kako želiš</p>
      <p class="desc">Primamo sve oblike plaćanja</p>
    </div>
    <div class="benefit">
      <p class="title gradient-text">Pravo na povrat</p>
      <p class="desc">15 dana za sve proizvode</p>
    </div>
    <div class="benefit">
      <p class="title gradient-text">Sigurna kupovina</p>
      <p class="desc">100% sigurna kupovina</p>
    </div>
  </div>
</template>

<style scoped>
.benefits {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 100px;
}

.benefit {
  flex: 1;
  background: white;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px 40px 30px 100px;
  position: relative;
  width: 100%;
  min-width: 310px;
}

.title {
  font-weight: 600;
  font-size: 18px;
}

.desc {
  color: var(--textClr);
  opacity: .6;
  opacity: .7;
  margin-top: 5px;
}

.benefit::before {
  content: "";
  position: absolute;
  left: 30px;
  transform: translateY(-50%);
  width: 64px !important;
  height: 64px !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
}

.benefit:nth-child(1)::before {
  top: calc(38% - 10px);
  background: url("/icons/shipping.png");
}

.benefit:nth-child(2)::before {
  top: calc(38%);
  width: 50px !important;
  height: 50px !important;
  background: url("/icons/payment.png");
}

.benefit:nth-child(3)::before {
  top: calc(40%);
  width: 50px !important;
  height: 50px !important;
  background: url("/icons/return.png");
}

.benefit:nth-child(4)::before {
  top: calc(40%);
  width: 50px !important;
  height: 50px !important;
  background: url("/icons/secure.png");
}

@media screen and (max-width: 600px) {
  .benefits {
    gap: 0;
    margin-bottom: 50px;
  }
  .benefit {
    box-shadow: none;
    background: transparent;
    padding-block: 20px;
    padding-right: 0;
    padding-left: 90px;
    width: fit-content;
    flex: 0;
  }
  .title {
    font-size: 15px;
  }
  .desc {
    font-size: 14px;
    width: fit-content;
  }
  .benefit::before {
    width: 50px !important;
    height: 50px !important;
  }
  .benefit:nth-child(1)::before {
    top: calc(50% - 15px);
  }
  .benefit:nth-child(2)::before,
  .benefit:nth-child(3)::before,
  .benefit:nth-child(4)::before {
    top: calc(50% - 5px);
    width: 40px !important;
    height: 40px !important;
  }
}
</style>