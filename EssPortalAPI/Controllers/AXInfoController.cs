﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EssPortal.Interface;
using EssPortal.Models;
using EssPortal.ViewModels;
using EssPortal.Interfaces;
using System.Security.Claims;
using static EssPortal.Models.DynamicAxClass;
using EssPortal.Models.searchVM;

namespace EssPortalAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize]    
    [ApiController]
    public class AXInfoController : ControllerBase
    {
        private readonly IAXInfoRepository _iAXInfoRepository;

        public AXInfoController(IAXInfoRepository iAXInfoRepository)
        {
            _iAXInfoRepository = iAXInfoRepository;
        }

        [Route("GetProductGroup")]
        [HttpGet]
        public async Task<IActionResult> GetProductGroup()
        {
            IEnumerable<object> products = await _iAXInfoRepository.GetProductGroups();
            if (products == null)
            {
                return BadRequest("Not Found Product Group ");
            }
            return Ok(products);
        }


        [Route("GetProduct")]
        [HttpGet]
        public async Task<IActionResult> GetProduct()
        { 
            IEnumerable<object> products= await _iAXInfoRepository.GetProducts(); 
            if (products == null)
            {
                return BadRequest("Not Found product ");
            } 
            return Ok(products);
        }

        [Route("GetProject")]
        [HttpGet]
        public async Task<IActionResult> GetProject()
        {
            IEnumerable<object> products = await _iAXInfoRepository.GetProjects();
            if (products == null)
            {
                return BadRequest("Not Found product ");
            }
            return Ok(products);
        }

        [Route("GetClient")]
        [HttpGet]
        public async Task<IActionResult> GetClient()
        {
            IEnumerable<object> client = await _iAXInfoRepository.GetClient();
            if (client == null)
            {
                return BadRequest("Not Found Client ");
            }
            return Ok(client);
        }

        [Route("GetVend")]
        [HttpGet]
        public async Task<IActionResult> GetVend()
        {
            IEnumerable<object> vend = await _iAXInfoRepository.GetVends();
            if (vend == null)
            {
                return BadRequest("Not Found Vend ");
            }
            return Ok(vend);
        }

        [Route("GetVactionTyps")]
        [HttpGet]
        public async Task<IActionResult> GetVactionTypes()
        {
            IEnumerable<object> vend = await _iAXInfoRepository.GetVactionTypes();
            if (vend == null)
            {
                return BadRequest("Not Found Vaction Types ");
            }
            return Ok(vend);
        }

        [Route("GetLoanTypes")]
        [HttpGet]
        public async Task<IActionResult> GetLoanTypes()
        {
            IEnumerable<object> vend = await _iAXInfoRepository.GetLoanTypes();
            if (vend == null)
            {
                return BadRequest("Not Found Loan Types ");
            }
            return Ok(vend);
        }

        [Route("GetEvalPeriod")]
        [HttpGet]
        public async Task<IActionResult> GetEvalPeriod()
        {
            IEnumerable<object> obj = await _iAXInfoRepository.GetEvalPeriod();
            if (obj == null)
            {
                return BadRequest("Not Found Data  ");
            }
            return Ok(obj);
        }

        [Route("GetEvalCommunity")]
        [HttpGet]
        public async Task<IActionResult> GetEvalCommunity()
        {
            IEnumerable<object> obj = await _iAXInfoRepository.GetEvalCommunity();
            if (obj == null)
            {
                return BadRequest("Not Found Data ");
            }
            return Ok(obj);
        }

        


        [HttpGet]
        [Route("GetLoansInfo/{employeeID}")] 
        public async Task<IActionResult> GetLoansInfo([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            LoanVm loanvms = await _iAXInfoRepository.GetLoansInfo(employeeID);
            if (loanvms == null)
            {
                return BadRequest("Not Found Loans Data ");
            }
            return Ok(loanvms);
        }

        [HttpGet]
        [Route("GetAssestInfo/{employeeID}")]
        public async Task<IActionResult> GetAssestInfo([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IEnumerable<object>  assset= await _iAXInfoRepository.GetAssestInfo(employeeID);
            if (assset == null)
            {
                return BadRequest("Not Found assset Data ");
            }
            return Ok(assset);
        }
         
        [HttpGet]
        [Route("GetPaySlipInfo/{employeeID}")]
        public async Task<IActionResult> GetPaySlipInfo([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PayslipVM obj = await _iAXInfoRepository.GetPaySlipInfo(employeeID);
            if (obj == null)
            {
                return BadRequest("Not Found PaySlip Data ");
            }
            return Ok(obj);
        }


        [HttpPost]
        [Route("GetAttendeesInfo")]
        public async Task<IActionResult> GetAttendeesInfo([FromBody] CommonVM commonVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            AttendeesVM obj = await _iAXInfoRepository.GetAttendeesInfo(commonVM.employeeID, commonVM.fromDate, commonVM.toDate);
            if (obj == null)
            {
                return BadRequest("Not Found Attendees Data ");
            }
            return Ok(obj);
        }


        [HttpPost]
        [Route("GetVacationBalanceInfo")]
        public async Task<IActionResult> GetVacationBalanceInfo([FromBody] CommonVM commonVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IEnumerable<object> obj = await _iAXInfoRepository.GetVacationBalanceInfo(commonVM.employeeID, commonVM.fromDate);
            
            return Ok(obj);
        }


        [HttpGet]
        [Route("GetEmployeeVacationInfo/{employeeID}")]
        public async Task<IActionResult> GetEmployeeVacationInfo([FromRoute] long employeeID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IEnumerable<object> obj = await _iAXInfoRepository.GetEmployeeVacationInfo(employeeID);
           
            return Ok(obj);
        }

       

    }
}
