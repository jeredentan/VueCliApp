
<template>
<div class="container">
<div class="col-md-3 ml-5"></div>
  <div class="mt-5 " >

      <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
      </div>                        
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" placeholder="New York City">
        </div>
        <div class="form-group col-md-6">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" placeholder="11206-1117">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-md">Sign in</button>
    </form>

		<tbl striped bordered  hover responsive-lg>
			<tbl-head>
				<tr>
				<th>thead col 1</th>
				<th>thead col 2</th>
				<th>thead col 3</th>
				<th>thead col 4</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr>
				<td>tbody col 1</td>
				<td>tbody col 2</td>
				<td>tbody col 3</td>
				<td>tbody col 4</td>
				</tr>
				<tr>
				<td>tbody col 1</td>
				<td>tbody col 2</td>
				<td>tbody col 3</td>
				<td>tbody col 4</td>
				</tr>
				<tr>
				<td colspan="4">tbody col wide</td>
				</tr>
			</tbl-body>
		</tbl>

   </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tbl, TblHead, TblBody } from 'mdbvue';
import { MdInput, MdTextarea, Container } from 'mdbvue';

@Component({
  components: {
    Tbl,
    TblHead,
    TblBody,
    MdInput,
    MdTextarea,
    Container,
  },
})
export default class PageRecherche extends Vue {}
</script>

<style lang="scss" scoped>
.box > .button {
  margin-right: 8px;
}
container {
  border: 1px solid black;
}
</style>
