<template>
    <ul>
            <!-- (session.getAttribute("login") == null)-->
            <div>
	        	  <li id="beforelogin">
	              <a data-bs-toggle="modal" data-bs-target="#signInModal" href="${root}/member/login">로그인</a>
	              </li>
	              <li id="beforelogin">
	              <a href='@/member/join'>회원가입</a>
	              </li>
            </div>
          	  <c:if test="${login.memberId eq 'admin'}">
        	  	  <li id="beforelogin">
	              <a href='${root}/member/logout'>로그아웃</a>
	              </li>
	              <li id="beforelogin">
	              <a href='${root}/member/memberlistmf'>회원관리</a>
	              </li>
        	  </c:if>
        	  <c:if test="${login.memberId ne 'admin'}">
              <li id="beforelogin">
              <a href='${root}/member/logout'>로그아웃</a>
              </li>
              </c:if>            
          </ul>
</template>

<script>
export default {
    name: "SessionTag",
};
</script>

<style scoped></style>