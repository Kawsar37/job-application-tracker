allList = [1, 2];
interviewList = [1];
rejectedList = [1, 2, 3];

function setCount() {
  totalCount = document.getElementById("total-count");
  interviewCount = document.getElementById("interview-count");
  rejectedCount = document.getElementById("rejected-count");

  totalCount.innerText = allList.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

setCount();

allBtn = document.getElementById("all");
interviewBtn = document.getElementById("interview");
rejectedBtn = document.getElementById("rejected");

function toggleBtn(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  // Selected btn
  selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-[#3B82F6]", "text-white");

  if (id === "all") {
    // all category dekhate hobe
    console.log("all");
  } else if (id === "interview") {
    // interview category dekhate hobe
    console.log("interview");
  } else {
    // rejected category dekhate hobe
    console.log("rejected");
  }
}
