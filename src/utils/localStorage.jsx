const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare report",
          description: "Complete the quarterly sales report.",
          date: "2025-01-19",
          category: "Sales",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Team meeting",
          description: "Participate in the weekly team sync-up.",
          date: "2025-01-20",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update inventory",
          description: "Check and update the product inventory in the system.",
          date: "2025-01-22",
          category: "Operations",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Design mockup",
          description: "Create a mockup for the new homepage.",
          date: "2025-01-19",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Client presentation",
          description: "Prepare slides for the client meeting.",
          date: "2025-01-21",
          category: "Presentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Code review",
          description: "Review pull requests from the team.",
          date: "2025-01-22",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Market analysis",
          description: "Analyze competitors' market trends.",
          date: "2025-01-19",
          category: "Research",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Prepare agenda",
          description: "Draft the agenda for the strategy meeting.",
          date: "2025-01-20",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "System maintenance",
          description: "Perform scheduled maintenance on the server.",
          date: "2025-01-22",
          category: "IT",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Content writing",
          description: "Write an article for the company blog.",
          date: "2025-01-23",
          category: "Content",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Product testing",
          description: "Test the new product release for bugs.",
          date: "2025-01-19",
          category: "QA",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Vendor meeting",
          description: "Discuss pricing with the vendor.",
          date: "2025-01-21",
          category: "Procurement",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Create social media calendar",
          description: "Plan and schedule posts for the next month.",
          date: "2025-01-19",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Data migration",
          description: "Migrate data from the old system to the new database.",
          date: "2025-01-20",
          category: "IT",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Conduct survey",
          description: "Run a survey for customer feedback.",
          date: "2025-01-23",
          category: "Feedback",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ];

  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
    console.log(employeesData, adminData);
    return { employeesData, adminData };
}
  