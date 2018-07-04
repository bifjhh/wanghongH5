<template>
<div class="addressInfo">
  <header>
    <div @click="goBack"> <i class="el-icon-close"></i></div>
    <span v-text="tit"></span>
  </header>
  <div class="baseInfo">
    <div class="newMask">
    <div class="newInfo">
    <input type="text" placeholder="请输入姓名">
    </div>
    <div class="newInfo">
    <input type="text" placeholder="请输入电话">
    </div>
    <div class="newInfo" @click="control" v-show="controlHome">
    <span>请选择地址</span>
    <i class="el-icon-arrow-right"></i>
    </div>
    <div class=" homeInfo" v-show="!controlHome">
      <div>
    <span v-text="hometown1"></span>
    <span v-text="hometown2"></span>
    <span v-text="hometown3"></span>
    </div>
  <i class="el-icon-arrow-right" @click="control"></i>
    </div>


    <textarea  placeholder="请填写详细街道地址"></textarea>
</div>
  </div>
  <div class="saveInfo">
    <button @click="saveInfo">确认</button>
  </div>
    <div class="mask" v-show="controlMask">
        <!--居住地址三级联动选项-->
    <section class="showChose" >
      <section class="address">
        <section class="title"  @click="closeAdd">
          <h4>居住地址</h4>
          <span>×</span>
        </section>
        <section class="title" >
          <div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].name}}</div>
          <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
          <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
        </section>
        <ul>
          <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.code, v.name, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.code, v.name, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.code, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>
        </ul>
      </section>
    </section>
    </div>
</div>

</template>
<script>
import { addressList } from "../assets/addressList.js";
export default {
  data() {
    return {
      tit: "新添收货地址",
      controlHome: true,
      controlMask: false,
      showChose: false,
      showProvince: true,
      showCity: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      province: 1,
      city: 1,
      district: 1,
      GetProvinceId: 1,
      District: false,
      Province: false,
      City: false,
      // v-for循环判断是否为当前
      selected: false,
      info: addressList,
      hometown1: "",
      hometown2: "",
      hometown3: ""
    };
  },
  created() {
    this.checkTit();
  },
  methods: {
    saveInfo() {
      window.history.back(-1);
    },
    checkTit() {
      if (this.$route.query.id == 1) {
        this.tit = "编辑收货地址";
      }
    },
    control() {
      this.controlMask = true;
    },
    closeAdd() {
      this.controlMask = false;
    },
    choseAdd: function() {
      this.showChose = true;
    },
    _filter(add, name, code) {
      let result = [];
      for (let i = 0; i < add.length; i++) {
        if (code == add[i].code) {
          result = add[i][name];
        }
      }
      return result;
    },
    getProvinceId: function(code, input, index) {
      this.hometown1 = input;
      this.province = code;
      this.Province = input;
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
      this.showCityList = this._filter(this.info, "city", this.province);
      // 点击选择当前
      this.info.map(a => (a.selected = false));
      this.info[index].selected = true;
    },
    provinceSelected: function() {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      // 清除市级和区级选项
      this.City = false;
      this.District = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
    },
    getCityId: function(code, input, index) {
      this.hometown2 = input;
      this.city = code;
      this.City = input;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
      this.showDistrictList = this._filter(
        this.showCityList,
        "area",
        this.city
      );
      // 选择当前添加active
      this.showCityList.map(a => (a.selected = false));
      this.showCityList[index].selected = true;
    },
    citySelected: function() {
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
    },
    getDistrictId: function(code, input, index) {
      this.hometown3 = input;
      this.controlMask = false;
      this.controlHome = false;
      this.district = code;
      this.District = input;
      // 选择当前添加active
      this.showDistrictList.map(a => (a.selected = false));
      this.showDistrictList[index].selected = true;
      // 选取市区选项之后关闭弹层
      this.showChose = false;
    },
    districtSelected: function() {
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
    },
    goBack() {
      window.history.back(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.addressInfo {
  header {
    height: 0.88rem;
    width: 100%;
    background-color: #fff;
    position: relative;
    line-height: 0.88rem;
    font-size: 0.36rem;
    text-align: center;
    padding: 0 0.28rem;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px 0px rgba(0, 6, 13, 0.08);
    div {
      position: absolute;
      font-size: 0.4rem;
    }
  }
  .baseInfo {
    width: 100%;
    padding: 0 0.28rem;
    background-color: #fff;
    .close {
      position: absolute;
      right: -0.15rem;
      top: -0.15rem;
      height: 0.38rem;
      width: 0.38rem;
    }
    h3 {
      text-align: center;
      font-weight: normal;
      font-size: 0.34rem;
      margin: 0.34rem 0;
    }
    textarea {
      height: 1.57rem;
      width: 100%;
      padding-top: 0.2rem;
      box-sizing: border-box;
      border-top: 1px solid #e5e5e5;
      font-size: 0.3rem;
    }
    .homeInfo {
      height: 1rem;
      border-top: 1px solid #e5e5e5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        span {
          font-size: 0.3rem;
          color: #333;
          margin-right: 0.1rem;
        }
      }
      i {
        font-size: 0.4rem;
      }
    }
    .newInfo {
      height: 1rem;
      border-top: 1px solid #e5e5e5;
      width: 100%;
      line-height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 0.3rem;
      }
      input {
        font-size: 0.3rem;
      }
      i {
        font-size: 0.4rem;
      }
    }
  }
  .saveInfo {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    background-color: #fff;
    text-align: center;
    line-height: 0.98rem;
    box-shadow: 0px 3px 8px 0px rgba(0, 6, 13, 0.2);
    button {
      width: 6.94rem;
      height: 0.76rem;
      border-radius: 8px;
      background-color: #ff5750;
      font-size: 0.32rem;
      color: #fff;
    }
  }
}

.showChose {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  background: rgba(0, 0, 0, 0.6);
}
.address {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 121;
  background: #fff;
  width: 100%;
}
.title h4 {
  display: inline-block;
  margin-left: 3.2rem;
  font-size: 0.32rem;
  line-height: 0.88rem;
  font-weight: normal;
  color: #999;
}
.title span {
  margin: 0.42rem 0 0 2.2rem;
  font-size: 0.45rem;
  line-height: 0.34rem;
  color: #d8d8d8;
}
.area {
  display: inline-block;
  font-size: 0.24rem;
  line-height: 0.88rem;
  margin-left: 0.42rem;
  color: #333;
}
.addList {
  width: 100%;
  padding-left: 0.32rem;
  font-size: 0.34rem;
  line-height: 0.88rem;
  color: #333;
}
/* 修改的格式 */
.address ul {
  width: 95%;
  height: 100%;
  max-height: 4.4rem;
  overflow: auto;
}
.address ul li {
  margin-left: 5%;
}
.address .title .active {
  color: #0071b8;
  border-bottom: 0.02rem solid #0071b8;
}
.address ul .active {
  color: #0071b8;
}
</style>

