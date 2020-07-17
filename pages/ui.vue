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

    <btn class="btn-primary" @click="$modal.push('add-new-nebula')">
      Add New Nebula
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-vote')">
      Vote
    </btn>
    <btn class="btn-primary" @click="$modal.push('vote-confirmed')">
      Vote Confirmed
    </btn>
    <btn class="btn-primary" @click="$modal.push('apply-to-nebula')">
      Apply to Nebula
    </btn>
    <btn class="btn-primary" @click="$modal.push('nebula')">
      Nebula
    </btn>
    <btn class="btn-primary" @click="$modal.push('nebula-edit')">
      Nebula Edit
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
    <btn class="btn-primary" @click="$modal.push('select-wallet-provider')">
      Select Wallet Provider
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('new-data-feed-subscription-1')"
    >
      New Data Feed Subscription 1
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('new-data-feed-subscription-2')"
    >
      New Data Feed Subscription 2
    </btn>
    <btn class="btn-primary" @click="$modal.push('edit-info')">
      Edit Info
    </btn>
    <btn class="btn-primary" @click="$modal.push('increase-deposit')">
      Increase deposit
    </btn>
    <btn class="btn-primary" @click="$modal.push('log-in')">
      Log in
    </btn>
    <btn class="btn-primary" @click="$modal.push('deposit-management')">
      Deposit management
    </btn>

    <client-only>
      <modal name="deposit-management">
        <modal-content size="sm">
          <template v-slot:head>Deposit management</template>
          <template v-slot:body>
            <coin-card-logo
              logo="/img/icons/ethereum.svg"
              name="Ethereum"
              style="margin-bottom: 17px;"
            ></coin-card-logo>
            <div
              style="font-size: 13px; line-height: 23px; margin-bottom: 24px;"
            >
              <div class="text-muted">
                Withdraw address:
              </div>
              <div>
                0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
              </div>
            </div>
            <btn class="btn-primary">Change withdraw address</btn>
          </template>
          <template v-slot:footer>
            <div style="font-size: 13px; margin-bottom: 26px;">
              Deposit Balance:
              <span class="text-green">~1.1 ETH | $261.39</span>
            </div>
            <btn class="btn-block btn-primary">Increase</btn>
          </template>
        </modal-content>
      </modal>

      <modal name="add-new-nebula">
        <modal-content size="md">
          <template v-slot:head>Add New Nebula</template>
          <template v-slot:body>
            <form-group>
              <template v-slot:label>Choose a data extractor</template>
              <v-select
                v-model="option"
                label="name"
                :options="options"
              ></v-select>
            </form-group>
            <form-input value="125 GOLD-USD">
              <template v-slot:label>
                Name
              </template>
            </form-input>
            <form-textarea
              value="5 minutes avg. USD price feed of one troy fine ounce of gold on a London Good Delivery gold bar"
              rows="3"
            >
              <template v-slot:label>
                Description:
              </template>
            </form-textarea>
            <div class="row">
              <div class="col-6" style="padding-right: 10px;">
                <form-group>
                  <template v-slot:label>Target blockchain:</template>
                  <coin-card
                    style="height: 89px;"
                    :icon="'/img/icons/waves.svg'"
                    :show-title="false"
                  ></coin-card>
                </form-group>
              </div>
              <div class="col-6" style="padding-left: 10px; display: flex;">
                <btn-checkbox-inline>
                  <template v-slot:label>Type:</template>
                  <btn-checkbox
                    type="radio"
                    name="target-blockchain"
                    size="sm"
                    :checked="true"
                  >
                    Data
                  </btn-checkbox>
                  <btn-checkbox type="radio" name="target-blockchain" size="sm">
                    Trigger
                  </btn-checkbox>
                </btn-checkbox-inline>
              </div>
            </div>
            <form-input value="3PAASSqnygiyYoQuqmXpwaSUJmRkqytwPaw">
              <template v-slot:label>
                Payment account:
              </template>
            </form-input>
            <hr />
            <div
              style="font-weight: 600; font-size: 15px; margin-bottom: 10px;"
            >
              Specification:
            </div>
            <form-group>
              <btn-checkbox-inline>
                <template v-slot:label>Min. required signatures:</template>
                <btn-checkbox type="radio" name="signatures" size="sm">
                  75%
                </btn-checkbox>
                <btn-checkbox
                  type="radio"
                  name="signatures"
                  size="sm"
                  :checked="true"
                >
                  90%
                </btn-checkbox>
                <btn-checkbox type="radio" name="signatures" size="sm">
                  All
                </btn-checkbox>
              </btn-checkbox-inline>
            </form-group>
            <div class="row">
              <div class="col-6" style="padding-right: 20px;">
                <form-input value="75">
                  <template v-slot:label>
                    GScore threshold:
                  </template>
                </form-input>
              </div>
              <div class="col-6" style="padding-left: 20px;">
                <form-input value="5">
                  <template v-slot:label>
                    Cluster size:
                  </template>
                </form-input>
              </div>
            </div>
            <div style="display: flex;">
              <form-group style="margin-left: auto;">
                <btn-checkbox-inline>
                  <template v-slot:label>Aggregation:</template>
                  <btn-checkbox type="radio" name="aggregation" size="sm">
                    Median
                  </btn-checkbox>
                  <btn-checkbox
                    type="radio"
                    name="aggregation"
                    size="sm"
                    :checked="true"
                  >
                    Average
                  </btn-checkbox>
                </btn-checkbox-inline>
              </form-group>
            </div>
            <form-textarea
              value="3PAASSqnygiyYoQuqmXpwaSUJmRkqytwPaw
3PAASSqnygiyYoQuqmXpwaSUJmRkqytwPaw
3PAASSqnygiyYoQuqmXpwaSUJmRkqytwPaw"
              rows="3"
            >
              <template v-slot:label>Providers Whitelist:</template>
            </form-textarea>
          </template>
          <template v-slot:footer>
            <btn class="btn-primary btn-block">
              Create new nebula
            </btn>
          </template>
        </modal-content>
      </modal>

      <modal name="modal-vote">
        <modal-content size="sm">
          <template v-slot:head>Vote</template>
          <template v-slot:body>
            <div class="text-center" style="font-weight: 600; font-size: 15px;">
              Vote for Linkpool node
            </div>
          </template>
          <template v-slot:footer>
            <div style="padding-bottom: 70px;">
              <stars-vote
                v-model.number="vote"
                style="margin-bottom: 30px;"
              ></stars-vote>
              <form-input
                v-model.number="vote"
                value="8"
                type="number"
                style="margin-bottom: 31px;"
              >
                <template v-slot:label>
                  Enter a value from 0 to 10
                </template>
              </form-input>
              <btn class="btn-primary btn-block">
                Confirm
              </btn>
            </div>
          </template>
        </modal-content>
      </modal>

      <modal name="vote-confirmed">
        <modal-content :show-footer="false" size="sm">
          <template v-slot:head>Confirmed</template>
          <template v-slot:body>
            <div class="text-center" style="margin-bottom: 32px;">
              <div style="font-size: 16px; margin-bottom: 6px;">
                Thanks for voting!
              </div>
              <div class="text-muted">Your vote has been counted</div>
            </div>
            <like-card style="margin-bottom: 30px;"></like-card>
          </template>
        </modal-content>
      </modal>

      <modal name="apply-to-nebula">
        <modal-content size="sm">
          <template v-slot:head>Apply to Nebula</template>
          <template v-slot:body>
            <div style="margin-bottom: 18px;">
              <span class="text-muted">Data feed:</span> Binance-GLD_USD
            </div>
            <form-group>
              <template v-slot:label>Choose a data extractor</template>
              <v-select
                v-model="option"
                label="name"
                :options="options"
              ></v-select>
            </form-group>
            This extractor takes Binance Waves/USD data
          </template>
          <template v-slot:footer>
            <btn class="btn-primary btn-block" disabled>
              Apply
            </btn>
            <btn class="btn-link btn-block">
              Cancel
            </btn>
          </template>
        </modal-content>
      </modal>

      <modal name="nebula">
        <modal-content-nebula
          rating="8.7"
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
          <template v-slot:head>Nebula @123</template>
          <btn class="btn-primary" style="min-width: 200px;">
            Subscribe
          </btn>
        </modal-content-nebula>
      </modal>

      <modal name="nebula-edit">
        <modal-content-nebula
          rating="8.7"
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
          <template v-slot:head>Nebula @123</template>
          <btn class="btn-primary" style="margin-bottom: 5px;">
            Apply to nebula
          </btn>
          <btn class="btn-primary" style="margin-bottom: 5px;">
            Approve nebula
          </btn>
          <btn class="btn-primary" style="margin-bottom: 5px;">
            Change exctractor
          </btn>
        </modal-content-nebula>
      </modal>

      <modal name="modal-content-node">
        <modal-content-node
          rating="8.7"
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
          <template v-slot:head>LinkPool Node 2</template>
        </modal-content-node>
      </modal>

      <modal name="modal-content-withdraw-deposit">
        <modal-content-withdraw-deposit
          :coin="{
            logo: '/img/icons/ethereum.svg',
            name: 'Ethereum',
            min: '10 ETH',
          }"
        >
          <template v-slot:head>Withdraw deposit</template>
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
          title="Your deposit has been sent"
          description="You have sent 25 ETH"
        >
          <template v-slot:head>Withdraw deposit</template>
        </modal-content-withdraw-success>
      </modal>

      <modal name="select-wallet-provider">
        <modal-content size="sm">
          <template v-slot:head>Select Wallet Provider</template>
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
        </modal-content>
      </modal>

      <modal name="new-data-feed-subscription-1">
        <modal-content-subscribe
          title="Nebula @11"
          avatar="/img/card/avatar.jpg"
        >
          <template v-slot:head>New Data Feed Subscription</template>
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

      <modal name="new-data-feed-subscription-2">
        <modal-content-subscribe>
          <template v-slot:head>New Data Feed Subscription</template>
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

      <modal name="edit-info">
        <modal-content size="md">
          <template v-slot:head>Edit Info</template>
          <template v-slot:body>
            <file-pond-avatar style="margin-bottom: 17px;">
              <file-pond
                ref="pond"
                name="test"
                label-idle=""
                accepted-file-types="image/jpeg, image/png"
                server="/api"
                :allow-image-crop="true"
                image-preview-height="100"
                image-crop-aspect-ratio="1:1"
                image-resize-target-width="100"
                image-resize-target-height="100"
                style-panel-layout="compact circle"
                style-button-remove-item-position="top center"
                style-button-process-item-position="bottom center"
                style-load-indicator-position="center"
                style-progress-indicator-position="center"
              />

              <template v-slot:label>
                Add image<span class="text-danger">*</span>
              </template>
            </file-pond-avatar>
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
        </modal-content>
      </modal>

      <modal name="increase-deposit">
        <modal-content size="sm">
          <template v-slot:head>Increase deposit</template>
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
        </modal-content>
      </modal>

      <modal name="log-in">
        <modal-content size="sm">
          <template v-slot:head>Log in</template>
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
                <div class="text-truncate">
                  <span class="text-muted">Node Address:</span>
                  0x742d35Cc6634C0532925a3b844Bc454e4438f44e
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
        </modal-content>
      </modal>
    </client-only>

    <table-block :is-load-more="isLoadMore" :page="page" @loadMore="loadMore">
      <template v-slot:head>
        <tr>
          <th style="width: 10%;">
            <sorting :dir="isSorting ? 'desc' : 'asc'" @click="sorting"
              >Name</sorting
            >
          </th>
          <th>About</th>
          <th>
            <sorting :dir="isSorting ? 'asc' : 'desc'" @click="sorting"
              >Score (0-10)</sorting
            >
          </th>
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
import ModalContent from '~/components/ModalContent.vue'
import ModalContentNebula from '~/components/ModalContentNebula.vue'
import ModalContentNode from '~/components/ModalContentNode.vue'
import ModalContentWithdrawDeposit from '~/components/ModalContentWithdrawDeposit.vue'
import ModalContentWithdrawSuccess from '~/components/ModalContentWithdrawSuccess.vue'
import ModalContentSubscribe from '~/components/ModalContentSubscribe.vue'
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
import LikeCard from '~/components/LikeCard.vue'
import FormGroup from '~/components/FormGroup.vue'
import BtnCheckboxInline from '~/components/BtnCheckboxInline.vue'
import CoinCardLogo from '~/components/CoinCardLogo.vue'
import Sorting from '~/components/Sorting.vue'
import FilePondAvatar from '~/components/FilePondAvatar.vue'
import StarsVote from '~/components/StarsVote.vue'

export default Vue.extend({
  components: {
    StarsVote,
    Btn,
    FormInput,
    TableBlock,
    ModalContent,
    ModalContentNebula,
    ModalContentNode,
    ModalContentWithdrawDeposit,
    ModalContentWithdrawSuccess,
    ModalContentSubscribe,
    CoinCheckbox,
    Checkbox,
    BtnCheckboxGroup,
    BtnCheckbox,
    FormTextarea,
    BlockList,
    Tabs,
    SearchInput,
    CoinCard,
    LikeCard,
    FormGroup,
    BtnCheckboxInline,
    CoinCardLogo,
    Sorting,
    FilePondAvatar,
  },
  data: () => ({
    isSorting: true,
    valueUrlLogin: 'https://27.215.121.161',
    isLoadMore: true,
    nebules: 20,
    vote: 1,
    page: 1,
    option: {
      value: 't-1',
      name: 'Binance Waves',
    },
    options: [
      {
        value: 'b-1',
        name: 'Binance Gravity Extractor',
      },
      {
        value: 't-1',
        name: 'Binance Waves',
      },
      {
        value: 'f-2',
        name: 'Binance WAVES/USD',
      },
      {
        value: 'g',
        name: 'Binance Gravity Extractor',
      },
    ],
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
    sorting() {
      this.isSorting = !this.isSorting
    },
  },
})
</script>

<style lang="scss"></style>
