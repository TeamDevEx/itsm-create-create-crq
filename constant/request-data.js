const requestData = (cmdbId, requestorId, scheduledDate, issueDetails) => {
  return {
    description: 'test',
    scheduledDate,
    characteristic: [
      {
        name: 'template',
        value: 'test_crq_template'
      },
      {
        name: 'Deployment Type',
        value: 'Automated'
      }
    ],
    targetEntity: [
      {
        id: cmdbId
      }
    ],
    relatedParty: [
      {
        id: requestorId,
        role: 'Requested By'
      }
    ],
    note: [
      {
        author: 'System',
        text: JSON.stringify(
          {
            issueDetails
          },
          null,
          2
        )
      }
    ]
  }
}

export { requestData }
