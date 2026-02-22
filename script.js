allJobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 4,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 7,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 8,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
];

// function setCount() {
//   totalCount = document.getElementById("total-count");
//   interviewCount = document.getElementById("interview-count");
//   rejectedCount = document.getElementById("rejected-count");

//   totalCount.innerText = allList.length;
//   interviewCount.innerText = interviewList.length;
//   rejectedCount.innerText = rejectedList.length;
// }

// setCount();

// Buttons
allBtn = document.getElementById("all");
interviewBtn = document.getElementById("interview");
rejectedBtn = document.getElementById("rejected");
deleteBtn = document.getElementById("delete-btn");

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
    allJobs.forEach((job) => {
      show(job, id);
    });
  } else if (id === "interview") {
    // interview category dekhate hobe
  } else {
    // rejected category dekhate hobe
  }
}

function show(job, type) {
  let cardContainer = document.getElementById("job-card-container");
  cardContainer.innerHTML = "";
  let card = `<div
          class="card bg-white p-6 rounded-lg border border-gray-700/10 flex justify-between relative"
        >
          <div class="space-y-5">
            <div>
              <h4 class="text-xl font-semibold text-[#002C5C]">
                ${job.companyName}
              </h4>
              <p class="text-lg text-[#64748B]">${job.position}</p>
            </div>

            <p class="text-[#64748b]">
              ${job.location} • ${job.type} • ${job.salary}
            </p>

            <div>
              <span
                class="bg-[#EEF4FF] text-[#002C5C] px-4 py-2 rounded-sm inline-block mb-2 font-semibold"
                >NOT APPLIED</span
              >
              <p class="text-gray-800">
                ${job.description}
              </p>
            </div>
            <div class="space-x-2">
              <button
                id="card-interview-btn"
                class="cursor-pointer font-semibold text-[#10B981] bg-white rounded-sm border border-[#10B981] px-6 py-2"
              >
                INTERVIEW
              </button>
              <button
                id="card-rejected-btn"
                class="cursor-pointer font-semibold text-[#EF4444] bg-white rounded-sm border border-[#EF4444] px-6 py-2"
              >
                REJECTED
              </button>
            </div>
          </div>
          <span
            id="delete-btn"
            class="absolute right-6 top-6 border border-gray-700/10 rounded-full h-8 w-8 flex justify-center items-center text-gray-600 cursor-pointer"
          >
            <i class="fa-regular fa-trash-can"></i>
          </span>
        </div>`;
  cardContainer.appendChild(card);
}
