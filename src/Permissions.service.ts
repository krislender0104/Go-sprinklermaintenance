export class Permissions {
  public modifydataset: boolean;
  public accessdataset: boolean;
  CheckDatSetPemissions(datasetId) {

    this.modifydataset = false;
    this.accessdataset = false;
    var admin = JSON.parse(localStorage.adminprivilages);
    var data = JSON.parse(localStorage.dataprivilages);
    if (admin.UserID > 0) {
      if (admin.ModifyAll) {
        this.modifydataset = true;
      }else{
        if (data.length > 0) {
          console.log(datasetId);
          var datasetfilter = data.filter(itm => itm.DataSetID == datasetId);
          console.log(datasetfilter);
          
          if (datasetfilter.length > 0) {
            if (datasetfilter[0].a_checkedOrUnchecked == true) {
              this.accessdataset = true;
            }
            
          }
        }
      }

      if (admin.AccessAll) {
        this.accessdataset = true;
      }else{
        if (data.length > 0) {
         
          var datasetfilter = data.filter(itm => itm.DataSetID == datasetId);
          
          if (datasetfilter.length > 0) {           
            if (datasetfilter[0].m_checkedOrUnchecked == true) {
              this.modifydataset = true;
            }
          }
        }
      }
     
    }



    
  }

}