using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Data
{
    public class SqlStudentData : IStudentData
    {
        private readonly SchoolDbContext schoolDbContext;

        public SqlStudentData(SchoolDbContext schoolDbContext)
        {
            this.schoolDbContext = schoolDbContext;
        }
        public IEnumerable<Student> GetStudents()
        {
            var qry = from s in schoolDbContext.Students
                      select s;
            return qry;
        }
    }
}
