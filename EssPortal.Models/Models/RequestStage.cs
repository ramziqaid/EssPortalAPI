﻿
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Models
{
   
    [Table("WF_OrderStage", Schema = "ess")]
    public class RequestStage
    {
        [Key]
        [Column(Order = 0)]
        public int OrderStageID { get; set; } 

        [Required]
        [Display(Name = "Request ID")]
        public int RequestID { get; set; }
        public virtual Request Request { get; set; }

        [Required]
        [Column(Order = 2)]
        public int StageTypeID { get; set; }
        //public virtual AmendmentReason AmendmentReason { get; set; }


        [Display(Name = "Justification ")]
        [MaxLength(500)]
        public string Justification { get; set; }

        [Display(Name = "ActionCode ")]
        public string ActionCode { get; set; }

       
        [Display(Name = "Create By ")]
        [Required(ErrorMessage = "CreateBy")]
        public int UserID { get; set; }

        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        //public string CreateDate { get; set; }
    }






}
 