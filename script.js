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
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all",
  },
];

interviewList = [];
rejectedList = [];

function setCount() {
  totalCount = document.getElementById("total-count");
  interviewCount = document.getElementById("interview-count");
  rejectedCount = document.getElementById("rejected-count");

  totalCount.innerText = allJobs.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

// Buttons
allBtn = document.getElementById("all");
interviewBtn = document.getElementById("interview");
rejectedBtn = document.getElementById("rejected");
deleteBtn = document.getElementById("delete-btn");

emptySection = document.getElementById("empty");
let availableJobs = document.getElementById("available-jobs");

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
    availableJobs.innerText = allJobs.length + " jobs";
    show(allJobs);
  } else if (id === "rejected") {
    availableJobs.innerText = rejectedList.length + " jobs";
    show(rejectedList);
  } else {
    availableJobs.innerText = interviewList.length + " jobs";
    show(interviewList);
  }
}

function getCurrentCategory() {
  if (interviewBtn.classList.contains("text-white")) {
    availableJobs.innerText = interviewList.length + " jobs";
    return interviewList;
  } else if (rejectedBtn.classList.contains("text-white")) {
    availableJobs.innerText = rejectedList.length + " jobs";
    return rejectedList;
  } else {
    availableJobs.innerText = allJobs.length + " jobs";
    return allJobs;
  }
}

cardContainer = document.getElementById("job-card-container");

function show(jobList) {
  cardContainer.innerHTML = "";

  jobList.forEach((job) => {
    let card = `<div
          class="card bg-white p-6 rounded-lg border border-gray-700/10 flex justify-between relative mb-4 ${job.status === "all" ? "border-l-4 border-l-gray-400/30" : job.status === "interview" ? "border-l-4 border-l-green-400" : "border-l-4 border-l-red-400"}"
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
              <span class="mb-2 ${job.status === "all" ? "btn btn-soft" : job.status === "interview" ? "btn btn-success" : "btn btn-error"}" >${job.status === "all" ? "NOT APPLIED" : job.status === "interview" ? "INTERVIEW" : "REJECTED"}</span >
              <p class="text-gray-800">
                ${job.description}
              </p>
            </div>
            <div class="space-x-2">
              <button
              jobid=${job.id}
                class="card-interview-btn cursor-pointer font-semibold text-[#10B981] bg-white rounded-sm border border-[#10B981] px-6 py-2"
              >
                INTERVIEW
              </button>
              <button
              jobid=${job.id}
                class="card-rejected-btn cursor-pointer font-semibold text-[#EF4444] bg-white rounded-sm border border-[#EF4444] px-6 py-2"
              >
                REJECTED
              </button>
            </div>
          </div>
          <button
            jobid=${job.id}
            class="card-delete-btn absolute right-6 top-6 border border-gray-700/10 rounded-full h-10 w-10 flex justify-center items-center text-gray-600 cursor-pointer"
          >
            <i jobid=${job.id} class="card-delete-btn fa-regular fa-trash-can"></i>
          </button>
        </div>`;
    let cardElement = document.createElement("div");
    cardElement.innerHTML = card;
    cardContainer.appendChild(cardElement.firstElementChild);
  });
  if (jobList.length == 0) {
    emptySection.classList.remove("hidden");
  } else {
    emptySection.classList.add("hidden");
  }
}

cardContainer.addEventListener("click", function (e) {
  let jobid = e.target.getAttribute("jobid");
  if (e.target.classList.contains("card-interview-btn")) {
    allJobs.forEach((job) => {
      if (job.id == jobid) {
        job.status = "interview";
        let ase = interviewList.find((item) => item.id == jobid);
        if (!ase) {
          rejectedList = rejectedList.filter((item) => {
            return item.id != jobid;
          });
          interviewList.push(job);
        }
      }
    });
  }
  if (e.target.classList.contains("card-rejected-btn")) {
    allJobs.forEach((job) => {
      if (job.id == jobid) {
        job.status = "rejected";
        let ase = rejectedList.find((item) => item.id == jobid);
        if (!ase) {
          interviewList = interviewList.filter((item) => {
            return item.id != jobid;
          });
          rejectedList.push(job);
        }
      }
    });
  }
  if (e.target.classList.contains("card-delete-btn")) {
    console.log(e.target);
    allJobs = allJobs.filter((job) => job.id != jobid);
    interviewList = interviewList.filter((job) => job.id != jobid);
    rejectedList = rejectedList.filter((job) => job.id != jobid);
  }
  setCount();
  show(getCurrentCategory());
});

setCount();
show(allJobs);
