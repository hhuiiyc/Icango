function sayhello(name)
{
  console.log("hello " + name)
}
module.exports.hello = sayhello

function dateobjectarrayinit(mon)
{
  /*
  dateobject: {
    month: "10",
      date: "1",
        num: "1",
          who: ["le"],
            usrselected: true,
              backgroundcolor: "green"
  },
  dateobjectarray: [{}]
  */
  var dateobjectarraytmp = [{}]
  dateobjectarraytmp[0] = { month: "10", date: "1", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[1] = { month: "10", date: "2", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[2] = { month: "10", date: "3", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[3] = { month: "10", date: "4", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[4] = { month: "10", date: "5", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[5] = { month: "10", date: "6", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[6] = { month: "10", date: "7", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[7] = { month: "10", date: "8", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[8] = { month: "10", date: "9", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[9] = { month: "10", date: "10", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[10] = { month: "10", date: "11", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[11] = { month: "10", date: "12", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[12] = { month: "10", date: "13", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[13] = { month: "10", date: "14", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[14] = { month: "10", date: "15", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[15] = { month: "10", date: "16", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[16] = { month: "10", date: "17", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[17] = { month: "10", date: "18", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[18] = { month: "10", date: "19", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[19] = { month: "10", date: "20", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[20] = { month: "10", date: "21", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[21] = { month: "10", date: "22", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[22] = { month: "10", date: "23", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[23] = { month: "10", date: "24", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[24] = { month: "10", date: "25", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[25] = { month: "10", date: "26", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[26] = { month: "10", date: "27", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[27] = { month: "10", date: "28", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[28] = { month: "10", date: "29", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[29] = { month: "10", date: "30", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[30] = { month: "10", date: "31", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: true, textcolor: "" }
  dateobjectarraytmp[31] = { month: "10", date: "1", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: false, textcolor: "grey" }
  dateobjectarraytmp[32] = { month: "10", date: "2", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: false, textcolor: "grey" }
  dateobjectarraytmp[33] = { month: "10", date: "3", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: false, textcolor: "grey" }
  dateobjectarraytmp[34] = { month: "10", date: "4", num: 0, who: ["le"], usrselected: false, backgroundcolor: "", dateavail: false, textcolor: "grey" }

  return dateobjectarraytmp
}
module.exports.dateobjectarrayinit = dateobjectarrayinit

function frech(groupnametmp)
{
  var db = wx.cloud.database()
  const _ = db.command
  const  actionDB = db.collection("action")
  var dateobjecttmp = actionDB.where({
    groupname: groupnametmp
  })
    .get({
      success: function (res) {
        console.log(res.data)
      }
    })
}
module.exports.frech = frech