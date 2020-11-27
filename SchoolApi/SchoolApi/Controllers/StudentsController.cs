using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SchoolApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentData studentData;

        public StudentsController(IStudentData studentData)
        {
            this.studentData = studentData;
        }
        
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<Student> Get()
        {

            return studentData.GetStudents();
            
            /*
            List<Student> students = new List<Student>() {

                new Student{studentId = 1,
                studentName ="abc",
                address="thay",
                email="thay@mail.com",
                phone="1212"
                },

             new Student{studentId = 2,
                studentName ="xyz",
                address="xyz",
                email="xyz@mail.com",
                phone="1212"
                },
            };

            return students.ToArray();*/
                 
        }
    }
}
