<template>
  <body>
    <h2>회원정보</h2>
    <div id="section">
      <div id="tboard">
        <table>
          <tr>
            <th>아이디</th>
            <td>{{ member.memberId }}</td>
          </tr>
          <tr>
            <th>닉네임</th>
            <td>{{ member.nickname }}</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>{{ member.password }}</td>
          </tr>
          <tr>
            <th>이메일아이디</th>
            <td>{{ member.emailId }}</td>
          </tr>
          <tr>
            <th>이메일도메인</th>
            <td>{{ member.emailDomain }}</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>{{ member.phoneNumber }}</td>
          </tr>

          <tr>
            <th>생성날짜</th>
            <td>{{ member.createdAt }}</td>
          </tr>
          <tr>
            <th>수정날짜</th>
            <td>{{ member.modifiedAt }}</td>
          </tr>

          <tr>
            <th>사용자 역할</th>
            <td>{{ member.memeberRole }}</td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
import http from "@/api/http.js";
export default {
  name: "MemberDetail",
  data() {
    return {
      member: {},
    };
  },
  created() {
    let memberId = this.$route.params.memberId;
    // alert(memberId)
    this.memberDetail(memberId);
  },
  methods: {
    memberDetail(memberId) {
      http
        .get(`member/memberdetailmf/${memberId}`)
        .then(({ data }) => {
          console.log(data);
          this.member = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style type="text/css">
#section {
  margin: auto;
}
#tboard {
  margin: auto;
}
#tboard > table {
  margin: auto;
  width: 80%;
  border: 1px solid #aabbcc;
}
</style>
