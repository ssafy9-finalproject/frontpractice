<template>
    <body>
        <h2>회원정보</h2>
        <div id="section">
            <div id="tboard">
                <table>
                    <thead></thead>
                    <tbody></tbody> 		
                </table>
            </div>
        </div>
    </body>
</template>

<script>
import http from '@/api/http.js';
export default {
    name: 'MemberDetail',
    data() {
        return {
            member: {}, // 한사람의 정보
        };
    },
    created() {
        let memberId = this.$route.params.memberId;
        this.memberDetail(memberId);
    },
    methods: {
        memberDetail(memberId){
            http
            .get(`member/memberdetailmf/${memberId}`)
            .then(({data}) => {
                console.log(data);
                this.member = data;
            })
            .catch((error) => {
                console.log(error)
            })
        },
    },
};
</script>

<style type="text/css">
	#section {margin: auto;}
	#tboard {margin: auto;}
	#tboard > table {margin: auto; width: 80%; border: 1px solid #aabbcc;}
</style>

	
  
 
  <script>
      let root = "http://localhost:8080";

    // memberId떼오기
    var url = window.location.pathname;
    var urls = window.location.href.split('/');
    console.log(urls[5]);
  	

    fetch(root + '/member/memberdetailmf/'+ urls[5])
      .then((response) => response.json())
      .then((data) => makeList(data)); // data : dto
  	
    // 회원 목록 tbody
    function makeList(members) {
      let tbody = ``;
      tbody +=     
		 `<tr>
		 			<th>아이디</th>
            <td>
              <input type="text" name="memberId" readonly="readonly"
              width="50" value="\${members.memberId}"/>
            </td>
		 		</tr>
		 		<tr>
		 			<th>닉네임</th><td><input type="text" name="nickname" readonly="readonly"
		 			width="50" value="\${members.nickname}"/></td>
		 		</tr>
		 		<tr>
		 			<th>비밀번호</th><td><input type="text" name="password" readonly="readonly"
		 			width="50" value="\${members.password}"/></td>
		 		</tr>
		 		<tr>
		 			<th>이메일아이디</th><td><input type="text" name="emailId" readonly="readonly"
		 			width="50" value="\${members.emailId}"/></td>
		 		</tr>
		 		<tr>
		 			<th>이메일도메인</th><td><input type="text" name="emailDomain" readonly="readonly"
		 			width="50" value="\${members.emailDomain}"/></td>
		 		</tr>
         <tr>
		 			<th>전화번호</th><td><input type="text" name="phoneNumber" readonly="readonly"
		 			width="50" value="\${members.phoneNumber}"/></td>
		 		</tr>

		 		<tr>
		 			<th>생성날짜</th><td><input type="text" name="createdAt" readonly="readonly"
		 			width="50" value="\${members.createdAt}"/></td>
		 		</tr>
         <tr>
		 			<th>수정날짜</th><td><input type="text" name="modifiedAt" readonly="readonly"
		 			width="50" value="\${members.modifiedAt}"/></td>
		 		</tr>
        
         <tr>
		 			<th>사용자 역할</th><td><input type="text" name="memberRole" readonly="readonly"
		 			width="50" value="\${members.memberRole}"/></td>
		 		</tr>
        
        `;
      document.querySelector("#memberdetail").innerHTML = tbody;
    }
    </script>
</html>
