SELECT  [farm_id]
      --,[is_current]
      --,[status_code]
      ,[status_description]
     -- ,[pruagentid]
      ,[agent_full_name]
      --,[farm_type_id]
      ,[farm_type_description]
      --,[mailer_id]
      ,[mailer_description]
      ,[Farm_Date]
      --,[neighborhood_id]
      ,[neighborhood]
      ,[mailer_cost]
      ,[mailer_count]
      ,[Notes]
  FROM [FarmApp].[dbo].[fact_farms]
  where is_current = 1
  and cast(pruagentid as int) = @pruagentid
order by farm_date desc
