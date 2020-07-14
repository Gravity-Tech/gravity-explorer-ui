<template>
  <div class="container">
    <tabs
      :items="[
        { label: 'Nebulae', to: { name: 'index' } },
        { label: 'Nodes', to: { name: 'nodes' } },
        { label: 'Data feeds', to: { name: 'data-feeds' } },
      ]"
    ></tabs>
    <search-input placeholder="Search"></search-input>
    <btn tag="nuxt-link" class="btn-primary" :to="'/nodes'">
      nodes
    </btn>
    <btn tag="nuxt-link" class="btn-secondary" :to="'/nodes'">
      nodes
    </btn>
    <btn tag="nuxt-link" class="btn-outline-primary" :to="'/nodes'">
      nodes
    </btn>
    <div class="dropdown">
      <btn
        id="dropdownMenuButton2"
        v-dropdown
        class="btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        nodes
      </btn>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <a class="dropdown-item" href="#">Explorer</a>
        <a class="dropdown-item" href="#">Node control panel</a>
        <a class="dropdown-item" href="#">FAQ</a>
        <a class="dropdown-item" href="#">Docs</a>
        <a class="dropdown-item" href="#">Log out</a>
      </div>
    </div>

    <btn class="btn-primary" @click="$modal.push('modal-content-nebula')">
      modal-content-nebula
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-node')">
      modal-content-node
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('modal-content-withdraw-deposit')"
    >
      modal-content-withdraw-deposit
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('modal-content-withdraw-success')"
    >
      modal-content-withdraw-success
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-wallet')">
      modal-content-wallet
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-subscribe')">
      modal-content-subscribe
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('modal-content-subscribe-code')"
    >
      modal-content-subscribe-code
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-edit')">
      modal-content-edit
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('modal-content-increase-deposit')"
    >
      modal-content-increase-deposit
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-login')">
      modal-content-login
    </btn>

    <client-only>
      <modal name="modal-content-nebula">
        <modal-content-nebula
          rating="8.7"
          modal-head="Nebula @123"
          card-title="Nebula @123"
          card-avatar="/img/card/avatar.jpg"
          :nodes-list="nodesList"
          caption="Nodes List:"
          :data="{
            regularity: 'per hour',
            chain: 'ETH',
            fee: '~2 ETH | 487.14',
            feed: 'Data feed: Binance-G',
            description:
              '5 minutes avg. USD price feed of one troy fine ounce of gold on a London Good Delivery gold bar.',
          }"
        >
        </modal-content-nebula>
      </modal>

      <modal name="modal-content-node">
        <modal-content-node
          rating="8.7"
          modal-head="LinkPool Node 2"
          card-date="27.05.2020"
          card-deposit="~10 WAVES | $12.6"
          card-avatar="/img/card/example-logo.svg"
          :nodes-list="nodesList"
          caption="Nebulae List:"
          :data="{
            name: 'LinkPool Node 1',
            address: '0x123456789',
            description:
              'LinkPool is a leading Gravity node service provider with the goal of providing tools and services that benefit the Gravity ecosystem. ',
            website: {
              name: 'linkpool.io',
              href: 'https://linkpool.io',
            },
          }"
        >
        </modal-content-node>
      </modal>

      <modal name="modal-content-withdraw-deposit">
        <modal-content-withdraw-deposit
          modal-head="Withdraw deposit"
          :coin="{
            logo: '/img/icons/ethereum.svg',
            name: 'Ethereum',
            min: '10 ETH',
          }"
        >
          <template v-slot:body>
            <form-input value="0x1015e2182E6AD26FB945723F7180795693A80D15">
              <template v-slot:label>
                To
              </template>
            </form-input>
            <form-input type="number" value="25">
              <template v-slot:label>
                Amount
              </template>
              <template v-slot:text>
                <span class="text-muted">Equal to</span> $5.590
                <span style="float: right;">
                  <span class="text-muted">Gas:</span> 100 Gwei
                </span>
              </template>
            </form-input>
          </template>
        </modal-content-withdraw-deposit>
      </modal>

      <modal name="modal-content-withdraw-success">
        <modal-content-withdraw-success
          modal-head="Withdraw deposit"
          title="Your deposit has been sent"
          description="You have sent 25 ETH"
        >
        </modal-content-withdraw-success>
      </modal>

      <modal name="modal-content-wallet">
        <modal-content-wallet modal-head="Select Wallet Provider">
          <template v-slot:body>
            <coin-checkbox name="wallet" icon="/img/icons/metamask.svg"
              >Metamask</coin-checkbox
            >
            <coin-checkbox
              name="wallet"
              icon="/img/icons/waves.svg"
              style="margin-bottom: 46px;"
              >Waves Keeper</coin-checkbox
            >
            <checkbox name="isAgree">
              By connecting, you agree to the
              <a href="/">Terms of Service</a> and
              <a href="/">Privacy Policy</a>
            </checkbox>
          </template>
          <template v-slot:footer>
            <btn class="btn-outline-primary btn-block">Login</btn>
          </template>
        </modal-content-wallet>
      </modal>

      <modal name="modal-content-subscribe">
        <modal-content-subscribe
          modal-head="New Data Feed Subscription"
          title="Nebula @11"
          avatar="/img/card/avatar.jpg"
        >
          <template v-slot:body>
            <form-input value="0x1015e2182E6AD26FB945723F7180795693A80D15">
              <template v-slot:label>
                dApp address
              </template>
            </form-input>
            <form-input value="0x1015e2182E6AD26FB945723F7180795693A80D15">
              <template v-slot:label>
                Method name
              </template>
            </form-input>
            <btn-checkbox-group>
              <template v-slot:label>
                Subscription type
              </template>
              <btn-checkbox name="subscribe">Deposit</btn-checkbox>
              <btn-checkbox name="subscribe">Per transaction</btn-checkbox>
            </btn-checkbox-group>
          </template>
          <template v-slot:footerDescription>
            <div class="text-center">
              <span
                class="small text-muted d-inline-block"
                style="margin-right: 8px;"
              >
                Estimated fee yearly deposit:
              </span>
              <span class="d-inline-block">25 ETH | $6078,25</span>
            </div>
          </template>
          <template v-slot:footer>
            <btn class="btn-primary btn-block">Next</btn>
          </template>
        </modal-content-subscribe>
      </modal>

      <modal name="modal-content-subscribe-code">
        <modal-content-subscribe modal-head="New Data Feed Subscription">
          <template v-slot:body>
            <div class="text-center" style="margin-bottom: 20px;">
              You can use this template code <br />in your smart contract
            </div>
            <form-textarea
              rows="6"
              value="{-# STDLIB_VERSION 3 #-}
 {-# CONTENT_TYPE DAPP #-}
 {-# SCRIPT_TYPE ACCOUNT #-} @Callable(i) func finalizeCurrentPrice() = { #Put your
            code here } @Verifier(tx) func verify() = false"
            >
            </form-textarea>
          </template>
          <template v-slot:bodyDescription>
            <div style="margin-bottom: 13px;">
              <span
                class="small text-muted d-inline-block"
                style="margin-right: 8px;"
              >
                Deposit address:
              </span>
              <span class="d-inline-block">
                0x1015e2182E6AD26FB945723F7180795693A80D15
              </span>
            </div>
            <div style="margin-bottom: 13px;">
              <span
                class="small text-muted d-inline-block"
                style="margin-right: 8px;"
              >
                Deposit amount:
              </span>
              <span class="d-inline-block">
                25 ETH
              </span>
            </div>
            <div style="margin-bottom: 13px;">
              <span
                class="small text-muted d-inline-block"
                style="margin-right: 8px;"
              >
                Available balance:
              </span>
              <span class="d-inline-block">
                1200 ETH
              </span>
            </div>
          </template>
          <template v-slot:footer>
            <btn class="btn-primary btn-block">Confirm subscription</btn>
          </template>
        </modal-content-subscribe>
      </modal>

      <modal name="modal-content-edit">
        <modal-content-edit modal-head="Edit Info">
          <template v-slot:body>
            <form-input value="LinkPool Node 1">
              <template v-slot:label>
                Name<span class="text-red">*</span>
              </template>
            </form-input>
            <form-textarea
              rows="3"
              value="LinkPool is a leading Gravity node service provider
withthe goal of providing tools and services that benefit the Gravity ecosystem. "
            >
              <template v-slot:label>
                Description<span class="text-red">*</span>
              </template>
              <template v-slot:text>
                <div class="text-right">250 characters max</div>
              </template>
            </form-textarea>
            <hr />
            <div
              style="font-size: 15px; font-weight: 600; margin-bottom: 10px;"
            >
              Connect to social networks:
            </div>
            <form-input>
              <template v-slot:label>
                Twitter
              </template>
            </form-input>
            <form-input>
              <template v-slot:label>
                Telegram
              </template>
            </form-input>
            <form-input>
              <template v-slot:label>
                Linkedin
              </template>
            </form-input>
            <form-input>
              <template v-slot:label>
                Facebook
              </template>
            </form-input>
            <form-input>
              <template v-slot:label>
                Web
              </template>
            </form-input>
          </template>
          <template v-slot:footer>
            <btn class="btn-outline-primary btn-block">Save</btn>
          </template>
        </modal-content-edit>
      </modal>

      <modal name="modal-content-increase-deposit">
        <modal-content-increase-deposit modal-head="Increase deposit">
          <template v-slot:body>
            <block-list
              :items="[
                { name: 'Deposit Balance:', value: '~1.1 ETH | $261.39' },
                { name: 'Account Balance:', value: '~1.4 ETH | $344' },
              ]"
            ></block-list>
            <form-input value="1">
              <template v-slot:append>
                ETH
              </template>
            </form-input>
          </template>
          <template v-slot:footer>
            <btn class="btn-primary btn-block">Increase</btn>
          </template>
        </modal-content-increase-deposit>
      </modal>

      <modal name="modal-content-login">
        <modal-content-login modal-head="Log in">
          <template v-slot:body>
            <form-input v-model="valueUrlLogin">
              <template v-slot:label>
                Node URL<span class="text-red">*</span>
              </template>
            </form-input>
            <form-input
              value="d6c5f660-ace6-47be-a4a6"
              style="margin-bottom: 24px;"
            >
              <template v-slot:label>
                API Token<span class="text-red">*</span>
              </template>
            </form-input>
            <coin-card
              :icon="valueUrlLogin ? '/img/icons/ethereum.svg' : ''"
              style="margin-bottom: 30px;"
            >
              <div v-if="valueUrlLogin">
                Ethereum
                <div>
                  <span class="text-muted">Node Address:</span>
                  0x1234567890000000
                </div>
              </div>
              <div v-else>
                Enter Node URL to detect the blockchain...
              </div>
            </coin-card>
            <checkbox name="isAgree">
              By connecting, you agree to the
              <a href="/">Terms of Service</a> and
              <a href="/">Privacy Policy</a>
            </checkbox>
          </template>
          <template v-slot:footer>
            <btn
              v-if="!valueUrlLogin"
              class="btn-outline-primary btn-block"
              disabled
            >
              Сonnect to Node
            </btn>
            <btn v-else class="btn-primary btn-block">
              Log in with Metamask
            </btn>
          </template>
        </modal-content-login>
      </modal>
    </client-only>

    <table-block :is-load-more="isLoadMore" :page="page" @loadMore="loadMore">
      <template v-slot:head>
        <tr>
          <th style="width: 10%;">Name</th>
          <th>About</th>
          <th>Score (0-10)</th>
          <th>Deposit chain</th>
          <th>Node deposit</th>
          <th>Joined</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in nebules" :key="index">
          <td style="width: 10%;">LinkPool Node 1</td>
          <td>
            Payouts depend on platform but are always automated and almost
            instant.
          </td>
          <td>10</td>
          <td>Waves</td>
          <td>Waves</td>
          <td>27.05.2020</td>
        </tr>
      </template>
    </table-block>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'
import TableBlock from '~/components/Table.vue'
import ModalContentIncreaseDeposit from '~/components/ModalContentIncreaseDeposit.vue'
import ModalContentNebula from '~/components/ModalContentNebula.vue'
import ModalContentNode from '~/components/ModalContentNode.vue'
import ModalContentWithdrawDeposit from '~/components/ModalContentWithdrawDeposit.vue'
import ModalContentWithdrawSuccess from '~/components/ModalContentWithdrawSuccess.vue'
import ModalContentWallet from '~/components/ModalContentWallet.vue'
import ModalContentSubscribe from '~/components/ModalContentSubscribe.vue'
import ModalContentEdit from '~/components/ModalContentEdit.vue'
import ModalContentLogin from '~/components/ModalContentLogin.vue'
import FormInput from '~/components/FormInput.vue'
import CoinCheckbox from '~/components/CoinCheckbox.vue'
import Checkbox from '~/components/Checkbox.vue'
import BtnCheckboxGroup from '~/components/BtnCheckboxGroup.vue'
import BtnCheckbox from '~/components/BtnCheckbox.vue'
import FormTextarea from '~/components/FormTextarea.vue'
import BlockList from '~/components/BlockList.vue'
import Tabs from '~/components/Tabs.vue'
import SearchInput from '~/components/SearchInput.vue'
import CoinCard from '~/components/CoinCard.vue'

export default Vue.extend({
  components: {
    Btn,
    FormInput,
    TableBlock,
    ModalContentIncreaseDeposit,
    ModalContentNebula,
    ModalContentNode,
    ModalContentWithdrawDeposit,
    ModalContentWithdrawSuccess,
    ModalContentWallet,
    ModalContentSubscribe,
    ModalContentEdit,
    CoinCheckbox,
    Checkbox,
    BtnCheckboxGroup,
    BtnCheckbox,
    FormTextarea,
    BlockList,
    Tabs,
    SearchInput,
    ModalContentLogin,
    CoinCard,
  },
  data: () => ({
    valueUrlLogin: 'https://27.215.121.161',
    isLoadMore: true,
    nebules: 20,
    page: 1,
    nodesList: [
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
    ],
  }),
  methods: {
    loadMore() {
      setTimeout(() => {
        this.nebules += 10
        this.page += 1
        if (this.page > 3) {
          this.isLoadMore = false
        }
      }, 1000)
    },
  },
})
</script>

<style lang="scss"></style>
