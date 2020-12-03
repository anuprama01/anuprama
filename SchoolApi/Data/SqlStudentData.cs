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

        public Student GetById(int? id)
        {
            return schoolDbContext.Students.Find(id);
        }
        public Student Add(Student newStudent)
        {
            schoolDbContext.Add(newStudent);
            schoolDbContext.SaveChanges();
            return newStudent;
        }

        public Student Delete(int id)
        {
            var student = GetById(id);
            if (student != null)
            {
                schoolDbContext.Students.Remove(student);
                schoolDbContext.SaveChanges();
            }
            return student;
        }

        public IEnumerable<Student> GetStudents()
        {
            var qry = from s in schoolDbContext.Students
                      select s;
            return qry;
        }

        public Student Update(Student updatedStudent)
        {
            var entity = schoolDbContext.Students.Attach(updatedStudent);
            entity.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            schoolDbContext.SaveChanges();
            return updatedStudent;
        }
    }
}
